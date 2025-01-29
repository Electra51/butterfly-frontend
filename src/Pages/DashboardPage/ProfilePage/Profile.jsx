import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import moment from "moment";
import { MdOutlineEdit } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import Loader from "../../../Components/Common/Loader";
import CommonDashboardHeader from "../../../Components/Common/CommonDashboardHeader";
import toast from "react-hot-toast";

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedUserDetails, setEditedUserDetails] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const userData = JSON.parse(localStorage.getItem("user-token"));
  const fileInputRef = useRef(null);

  //get user details from calling api
  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/auth/user/${userData?.user?.email}`
        );
        setUserDetails(response.data.user);
        setEditedUserDetails(response.data.user);
      } catch (error) {
        setError(error.message || "Error fetching user details");
      } finally {
        setLoading(false);
      }
    };
    if (userData?.user?.email) {
      getUserDetails();
    }
  }, [userData?.user?.email]);

  const handleEditClick = () => {
    if (userDetails?.role == 1) {
      setError("You are not verified. Please wait.");
      return;
    }
    setIsEditMode(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleSave = async (e) => {
    e.preventDefault();

    let imageUrl = editedUserDetails.profileImage;
    if (selectedImage) {
      try {
        const formData = new FormData();
        formData.append("image", selectedImage);

        const uploadResponse = await axios.post(
          "http://localhost:8080/api/v1/auth/upload-image",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );

        imageUrl = uploadResponse.data.url;
        console.log("Uploaded Image URL:", imageUrl);
      } catch (error) {
        console.error("Image upload failed:", error);
        toast.error("Image upload failed!");
        return;
      }
    }

    try {
      const updatedUser = {
        profileImage: imageUrl,
        address: editedUserDetails.address,
        age: editedUserDetails.age,
      };

      const response = await axios.put(
        `http://localhost:8080/api/v1/auth/user/${userData?.user?.email}`,
        updatedUser,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("Update Response:", response);
      if (response.data.user) {
        toast.success("Update Successful!");
        setUserDetails(response.data.user);
        setIsEditMode(false);
        setPreviewImage(null);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("Failed to update user details.");
    }
  };

  const handleCancel = () => {
    setIsEditMode(false);
    setEditedUserDetails(userDetails);
    setSelectedImage(null);
    setPreviewImage(null);
  };
  console.log("userDetails", userDetails);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="m-2">
          <CommonDashboardHeader title={"User Details"} />
          {userDetails ? (
            <div className="max-w-[1000px] my-6 px-1">
              {isEditMode ? (
                <div className="py-2">
                  <div className="rounded-sm flex justify-normal items-start gap-10">
                    <div className="h-44 w-52 rounded-md relative">
                      <img
                        src={
                          previewImage || userDetails.profileImage || userImage
                        }
                        alt="User"
                        width={150}
                        className="h-full w-full object-fill rounded-md"
                      />
                      <div className="absolute bottom-3 right-3">
                        <div
                          className="h-10 w-10 rounded-full flex justify-center items-center shadow-md bg-gray-600 cursor-pointer"
                          onClick={handleIconClick}>
                          <MdOutlineEdit className="text-white" />
                        </div>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          ref={fileInputRef}
                          className="hidden"
                        />
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="">
                        <span className="font-semibold w-52">Name: </span>
                        <span className="font-normal text-gray-600">
                          {editedUserDetails.name}
                        </span>{" "}
                      </div>
                      <div className="mt-1">
                        <span className="font-semibold w-52">User Name: </span>
                        <span className="font-normal text-gray-600">
                          @{editedUserDetails.name}
                        </span>{" "}
                      </div>
                      <div className="mt-1">
                        <span className="font-semibold w-52">
                          E-mail Address:{" "}
                        </span>
                        <span className="font-normal text-gray-600">
                          {editedUserDetails.email}
                        </span>{" "}
                      </div>
                      <div className="mt-1">
                        <span className="font-semibold w-52">Join Date: </span>
                        <span className="font-normal text-gray-600">
                          {moment(userDetails.createdAt).format("ll")}
                        </span>{" "}
                      </div>
                    </div>
                    <div className="mt-2">
                      <div>
                        <span className="font-semibold w-52">Address: </span>

                        <input
                          type="text"
                          name="address"
                          value={editedUserDetails.address || ""}
                          onChange={handleChange}
                          className="border rounded px-2 py-1"
                        />
                      </div>
                      <div className="mt-2">
                        <span className="font-semibold w-52">Age (yr): </span>

                        <input
                          type="text"
                          name="age"
                          value={editedUserDetails.age || ""}
                          onChange={handleChange}
                          className="border rounded px-2 py-1"
                        />
                      </div>
                      <div>
                        <button
                          className="bg-[#0077B6] gap-1 hover:bg-[#76C4EB] border border-[#0077B6] text-white text-[14px] rounded-sm px-2 py-1 mt-6"
                          onClick={handleSave}>
                          Save
                        </button>
                        <button
                          className="border border-gray-400 text-[14px] rounded-sm px-2 py-1 mt-6 ml-2"
                          onClick={handleCancel}>
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                  <p className="text-[13px] mt-10">
                    <span className="text-red-500"> *Note: </span>You can't edit
                    your name and email. Thank You. Have a good journey!
                  </p>
                </div>
              ) : (
                <div className="py-2 flex justify-normal items-start gap-16 w-full">
                  <div className="h-44 w-52 rounded-md">
                    <img
                      src={userDetails.profileImage || userImage}
                      alt="User"
                      width={150}
                      className="h-full w-full object-fill rounded-md"
                    />
                  </div>
                  <div className="mt-2">
                    <p className="text-[15px]">
                      <span className="font-semibold">User Name:</span>{" "}
                      <span className="font-normal text-gray-600">
                        @{userDetails.name}
                      </span>
                    </p>

                    <p className="text-[15px] mt-1">
                      <span className="font-semibold">Email:</span>{" "}
                      <span className="font-normal text-gray-600">
                        {userDetails.email}
                      </span>
                    </p>
                    <p className="text-[15px] mt-1">
                      <span className="font-semibold">Join Date:</span>{" "}
                      <span className="font-normal text-gray-600">
                        {moment(userDetails.createdAt).format("ll")}
                      </span>
                    </p>
                    {userDetails.address && (
                      <p className="text-[15px] mt-1">
                        <span className="font-semibold">Address:</span>{" "}
                        <span className="font-normal text-gray-600">
                          {userDetails.address}
                        </span>
                      </p>
                    )}
                    {userDetails.age && (
                      <p className="text-[15px] mt-1">
                        <span className="font-semibold">Age (yr):</span>{" "}
                        <span className="font-normal text-gray-600">
                          {userDetails.age}
                        </span>
                      </p>
                    )}

                    <button
                      className="border border-gray-400 rounded-sm px-2 py-1 mt-4 flex justify-center items-center gap-1 text-[14px]"
                      onClick={handleEditClick}>
                      Edit Profile <AiOutlineEdit className="text-[16px]" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <p className="text-center flex justify-center items-center mt-10">
              User not found.
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default Profile;
