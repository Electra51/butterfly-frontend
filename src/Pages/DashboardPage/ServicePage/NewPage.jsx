import React, { useCallback, useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import { useDropzone } from "react-dropzone";
import axios from "axios";

const NewPage = () => {
  const [loading, setLoading] = useState(false);
  const [detailImage, setDetailImage] = useState(null);
  const [detail, setDetail] = useState([
    { question1: "", ans1: "", img: detailImage || "" },
  ]);

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

  const handleSubmit = async (e) => {
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
              "http://localhost:8080/api/v1/service/upload-image",
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
            img: imageUrlforDetail, // Replace the image file with the uploaded URL
          };
        })
      );

      const servicesData = {
        detail: updatedDetails,
      };

      console.log("servicesData", servicesData);

      // Submit `servicesData` to your backend if necessary
      // await axios.post("http://localhost:8080/api/v1/service", servicesData);

      toast.success("Service added successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to add service.");
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

export default NewPage;
