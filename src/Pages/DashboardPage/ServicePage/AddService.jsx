import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdOutlineFileUpload } from "react-icons/md";
import { useDropzone } from "react-dropzone";

const AddService = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const getCategoryData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/category/categories`
      );

      if (response.status === 200) {
        setCategories(response.data);
      } else {
        console.error("Failed to fetch categories");
      }
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getCategoryData();
  }, []);
  const [name, setName] = useState("");
  const [availability, setAvailability] = useState("");
  const [category, setCategory] = useState("");
  const [discount, setDiscount] = useState("");
  const [price, setPrice] = useState("");
  const [iconImage, setIconImage] = useState(null);
  const [tag, setTag] = useState([]);
  const [status, setStatus] = useState([]);
  const [material, setMaterial] = useState([]);
  const [detailImage, setDetailImage] = useState(null);
  const [detail, setDetail] = useState([
    { question1: "", ans1: "", img: detailImage || "" },
  ]);
  const [worksHow, setWorksHow] = useState([{ headline: "", details: "" }]);
  const [pricePerTime, setPricePerTime] = useState([{ time: "", budget: "" }]);

  const onDrop = useCallback((acceptedFiles, index) => {
    const file = acceptedFiles[0];
    setDetailImage(file);
    setDetail((prevDetail) => {
      const updatedDetail = [...prevDetail];
      updatedDetail[index].img = file;
      return updatedDetail;
    });
  }, []);

  // Move the hook outside the map function
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      // Handle file upload dynamically later
    },
  });
  // ondrop for iconImage
  const onDropforIconImage = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setIconImage(file);
  }, []);
  const {
    getRootProps: getRootPropsIconImage,
    getInputProps: getInputPropsIconImage,
  } = useDropzone({
    onDrop: onDropforIconImage,
  });
  const handleSubmit = async (e) => {
    console.log("e", e);
    e.preventDefault();
    setLoading(true);

    try {
      const updatedDetails = await Promise.all(
        detail.map(async (detailItem) => {
          let imageUrlforDetail = "";

          if (detailItem.img) {
            const imageFormData = new FormData();
            imageFormData.append("image", detailItem.img);

            const imageUploadResponse = await axios.post(
              `${import.meta.env.VITE_API_URL}/service/upload-image`,
              imageFormData,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            );
            imageUrlforDetail = imageUploadResponse.data.url;
          }

          return {
            ...detailItem,
            img: imageUrlforDetail,
          };
        })
      );
      let imageUrlIcon = "";
      if (iconImage) {
        const imageFormData = new FormData();
        imageFormData.append("image", iconImage);
        const imageUploadResponse = await axios.post(
          `${import.meta.env.VITE_API_URL}/service/upload-image`,
          imageFormData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        imageUrlIcon = imageUploadResponse.data.url;
      }
      const servicesData = {
        name,
        availability,
        discount,
        category,
        price,
        tag,
        status,
        icon: imageUrlIcon,
        detail: updatedDetails,
        material,
        works_how: worksHow,
        price_per_time: pricePerTime,
      };

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/service/service`,
        servicesData
      );
      toast.success("Service added successfully!");
      console.log(response.data);
    } catch (error) {
      console.error(error);
      toast.success("Failed to add service.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white mt-4 w-[1440px]">
      <div className="pl-4">Add New Service</div>
      <form
        className="rounded px-4 pt-6 pb-8 mb-4 mt-2"
        onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-7 justify-normal items-start">
          <div>
            <div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <input
                  type="text"
                  name="name"
                  placeholder="Service Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="px-2 py-1.5 border text-[14px] placeholder:text-[14px]"
                  required
                />
                <select
                  name="availability"
                  value={availability}
                  onChange={(e) => setAvailability(e.target.value)}
                  className="px-2 py-1.5 border text-[14px] placeholder:text-[14px] bg-white"
                  required>
                  <option value="">Select Availability</option>
                  <option value="Available">Available</option>
                  <option value="Not Available">Not Available</option>
                  <option value="Limited">Limited</option>
                  <option value="Coming Soon">Coming Soon</option>
                </select>
                <input
                  type="text"
                  placeholder="Tags (comma-separated)"
                  value={tag.join(", ")} // Remove optional chaining
                  onChange={(e) =>
                    setTag(e.target.value.split(",").map((item) => item.trim()))
                  } // Split the input value and trim spaces
                  className="px-2 py-1.5 border text-[14px] placeholder:text-[14px]"
                />
                <select
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="px-2 py-1.5 border text-[14px] placeholder:text-[14px] bg-white"
                  required>
                  <option value="">Select Category</option>
                  {categories?.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-3">
                <input
                  type="text"
                  name="discount"
                  placeholder="Discount (Optional)"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                  className="px-2 py-1.5 border text-[14px] placeholder:text-[14px]"
                />
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="px-2 py-1.5 border text-[14px] placeholder:text-[14px]"
                  required
                />
                <select
                  name="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="px-2 py-1.5 border text-[14px] placeholder:text-[14px] bg-white">
                  <option value="">Select Status</option>
                  <option value="Trending">Trending</option>
                  <option value="Featured">Featured</option>
                  <option value="Reject">Reject</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>
            </div>
            <div className="mt-6">
              <div
                {...getRootPropsIconImage()}
                className="grid grid-cols-2 justify-normal items-center gap-[18px] mt-1">
                <div className="border border-dashed rounded-md flex flex-col justify-center items-center py-7">
                  <input {...getInputPropsIconImage()} />
                  <div className="h-[30px] w-[30px] rounded-full border border-[#C2A74E] flex justify-center items-center">
                    <MdOutlineFileUpload className="text-[#C2A74E] text-xl" />
                  </div>
                  <p className="mt-[14px] mb-[3px] text-[13px] text-gray-400">
                    Drag & Drop or{" "}
                    <span className="text-[#C2A74E]">Choose</span> Icon
                  </p>
                  <p className="text-gray-300 text-[12px] font-normal">
                    Supported formats: PNG, JPG, JPEG
                  </p>
                </div>
                {iconImage ? (
                  <div className="h-[140px] w-full bg-[#f8f0cf] flex justify-center items-center rounded-[4px]">
                    <img
                      src={URL.createObjectURL(iconImage)}
                      alt="Featured"
                      className="h-full w-full object-contain py-2"
                    />
                  </div>
                ) : (
                  <div className="h-full w-full bg-[#C2A74E] text-white flex justify-center items-center rounded-[4px]">
                    <p>Preview Icon </p>
                  </div>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="">
                <div className="my-5">
                  <p className="font-medium mb-2 text-[14px]">Material</p>
                  <input
                    type="text"
                    placeholder="Material (comma-separated)"
                    value={material.join(", ")}
                    onChange={(e) =>
                      setMaterial(
                        e.target.value.split(",").map((item) => item.trim())
                      )
                    }
                    className="px-2 py-1.5 border text-[14px] placeholder:text-[14px] w-full"
                  />
                </div>
                <p className="font-medium mb-2 text-[14px]">Price Per Time</p>
                {pricePerTime.map((item, index) => (
                  <div key={index}>
                    <input
                      type="text"
                      placeholder="Time"
                      value={item.time}
                      onChange={(e) => {
                        const updatedPricePerTime = [...pricePerTime];
                        updatedPricePerTime[index].time = e.target.value;
                        setPricePerTime(updatedPricePerTime);
                      }}
                      className="px-2 py-1.5 border text-[14px] placeholder:text-[14px] w-full"
                    />
                    <input
                      type="number"
                      placeholder="Budget"
                      value={item.budget}
                      onChange={(e) => {
                        const updatedPricePerTime = [...pricePerTime];
                        updatedPricePerTime[index].budget = e.target.value;
                        setPricePerTime(updatedPricePerTime);
                      }}
                      className="px-2 py-1.5 border text-[14px] placeholder:text-[14px] mt-3 w-full"
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    setPricePerTime([
                      ...pricePerTime,
                      { time: "", budget: "" },
                    ]);
                  }}
                  className="px-4 py-1 bg-blue-500 text-white mt-3 w-full text-[14px]">
                  Add Price Per Time +
                </button>
              </div>

              <div className="mt-3">
                <h3 className="font-medium mb-2 text-[14px]">Works How</h3>
                {worksHow.map((item, index) => (
                  <div key={index}>
                    <input
                      type="text"
                      placeholder="Headline"
                      value={item.headline}
                      onChange={(e) => {
                        const updatedWorksHow = [...worksHow];
                        updatedWorksHow[index].headline = e.target.value;
                        setWorksHow(updatedWorksHow);
                      }}
                      className="px-2 py-1.5 border text-[14px] placeholder:text-[14px] mt-0 w-full"
                    />
                    <textarea
                      type="text"
                      placeholder="Details"
                      value={item.details}
                      onChange={(e) => {
                        const updatedWorksHow = [...worksHow];
                        updatedWorksHow[index].details = e.target.value;
                        setWorksHow(updatedWorksHow);
                      }}
                      className="px-2 py-1.5 border text-[14px] placeholder:text-[14px] mt-3 w-full"
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    setWorksHow([...worksHow, { headline: "", details: "" }]);
                  }}
                  className="px-4 py-1 bg-blue-500 text-white mt-3 w-full text-[14px]">
                  Add Works How +
                </button>
              </div>
            </div>
          </div>

          <div className="mt-0">
            <h3 className="font-semibold mb-2">Details</h3>
            {detail.map((item, index) => (
              <div key={index} className="mb-6">
                <input
                  type="text"
                  placeholder="Question"
                  value={item.question1}
                  onChange={(e) => {
                    const updatedDetail = [...detail];
                    updatedDetail[index].question1 = e.target.value;
                    setDetail(updatedDetail);
                  }}
                  className="px-2 py-1.5 border text-[14px] placeholder:text-[14px] w-full mt-0"
                />
                <textarea
                  type="text"
                  placeholder="Answer"
                  value={item.ans1}
                  onChange={(e) => {
                    const updatedDetail = [...detail];
                    updatedDetail[index].ans1 = e.target.value;
                    setDetail(updatedDetail);
                  }}
                  className="px-2 py-1.5 border text-[14px] placeholder:text-[14px] h-[80px] w-full mt-3"
                />
                <div className="flex flex-col mt-4">
                  <div
                    {...getRootProps()}
                    className="grid grid-cols-2 justify-normal items-center gap-[18px]">
                    <div className="border border-dashed rounded-md flex flex-col justify-center items-center py-7">
                      <input
                        {...getInputProps()}
                        onChange={(e) => onDrop([e.target.files[0]], index)}
                      />
                      <div className="h-[30px] w-[30px] rounded-full border border-[#C2A74E] flex justify-center items-center">
                        <MdOutlineFileUpload className="text-[#C2A74E] text-xl" />
                      </div>
                      <p className="mt-[14px] mb-[3px] text-[13px] text-gray-400">
                        Drag & Drop or{" "}
                        <span className="text-[#C2A74E]">Choose</span> Image
                      </p>
                      <p className="text-gray-300 text-[12px] font-normal">
                        Supported formats: PNG, JPG, JPEG
                      </p>
                    </div>
                    {item.img ? (
                      <div className="h-[140px] w-full bg-[#f8f0cf] flex justify-center items-center rounded-[4px]">
                        <img
                          src={URL.createObjectURL(item.img)}
                          alt="Preview"
                          className="h-full w-full object-contain py-2"
                        />
                      </div>
                    ) : (
                      <div className="h-full w-full bg-[#C2A74E] text-white flex justify-center items-center rounded-[4px]">
                        <p>Preview Image</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={() =>
                setDetail([
                  ...detail,
                  { question1: "", ans1: "", img: detailImage },
                ])
              }
              className="px-4 py-1 bg-blue-500 text-white mt-3 w-1/2 text-[14px]">
              Add Detail +
            </button>
          </div>
        </div>

        <div className="mt-6 flex justify-end ">
          <button
            type="submit"
            className="w-[180px] flex justify-center items-center gap-2 px-4 py-2 bg-[#C2A74E] font-semibold text-white rounded">
            {loading ? (
              <span className="loading loading-spinner loading-xs"></span>
            ) : (
              "Add Service"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddService;
