import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import CommonDashboardHeader from "../../../Components/Common/CommonDashboardHeader";
import { useDropzone } from "react-dropzone";
import { MdOutlineFileUpload } from "react-icons/md";
import toast from "react-hot-toast";

const AddProduct = () => {
  // const [loading, setLoading] = useState(true);
  // const [productCategories, setProductCategories] = useState([]);
  // const [detailImage, setDetailImage] = useState(null);
  // const [detail, setDetail] = useState([{ id: "", img1st: null }]);
  // const [tagList, setTagList] = useState("");
  // const [brand, setBrand] = useState("");
  // const [itemWeight, setItemWeight] = useState("");
  // const [material, setMaterial] = useState("");
  // const [details, setDetails] = useState("");
  // const [stock, setStock] = useState("");
  // const [price, setPrice] = useState("");
  // const [productName, setProductName] = useState("");
  // const [productCategory, setProductCategory] = useState("");

  // const getProductCategoryData = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await axios.get(
  //       `${import.meta.env.VITE_API_URL}/product-category/categories`
  //     );
  //     if (response.status === 200) {
  //       setProductCategories(response.data);
  //     } else {
  //       console.error("Failed to fetch categories");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   getProductCategoryData();
  // }, []);

  // const onDrop = useCallback((acceptedFiles, index) => {
  //   const file = acceptedFiles[0];
  //   setDetailImage(file);
  //   setDetail((prevDetail) => {
  //     const updatedDetail = [...prevDetail];
  //     updatedDetail[index].img = file;
  //     return updatedDetail;
  //   });
  // }, []);

  // const { getRootProps, getInputProps } = useDropzone({
  //   onDrop: (acceptedFiles) => onDrop(acceptedFiles, detail.length - 1), // Assign to the last index
  // });

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const updatedDetails = await Promise.all(
  //       detail.map(async (detailItem) => {
  //         let imageUrlforDetail = "";

  //         if (detailItem.img1st) {
  //           const imageFormData = new FormData();
  //           imageFormData.append("image", detailItem.img1st);

  //           const imageUploadResponse = await axios.post(
  //             `${import.meta.env.VITE_API_URL}/service/upload-image`,
  //             imageFormData,
  //             { headers: { "Content-Type": "multipart/form-data" } }
  //           );
  //           imageUrlforDetail = imageUploadResponse.data.url;
  //         }

  //         return {
  //           id: detailItem.id || new Date().getTime().toString(),
  //           img1st: imageUrlforDetail,
  //         }; // Assign a unique ID if not present
  //       })
  //     );

  //     const product = {
  //       product_name: productName,
  //       stock,
  //       img: updatedDetails,
  //       product_category: productCategory,
  //       price,
  //       tag_list: tagList.split(",").map((tag) => tag.trim()),
  //       brand,
  //       item_weight: itemWeight,
  //       material,
  //       details,
  //     };

  //     const response = await axios.post(
  //       "http://localhost:8080/api/v1/product/product-add",
  //       product
  //     );
  //     if (response.data.success) {
  //       toast.success(response.data.message);
  //     } else {
  //       toast.error(response.data.message);
  //     }
  //   } catch (error) {
  //     console.error("Error adding product:", error);
  //     toast.error("Error adding product");
  //   }
  // };
  // console.log("first", detailImage);

  const [loading, setLoading] = useState(true);
  const [productCategories, setProductCategories] = useState([]);
  const [detail, setDetail] = useState([]);
  const [tagList, setTagList] = useState("");
  const [brand, setBrand] = useState("");
  const [itemWeight, setItemWeight] = useState("");
  const [material, setMaterial] = useState("");
  const [details, setDetails] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");

  const getProductCategoryData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/product-category/categories`
      );
      if (response.status === 200) {
        setProductCategories(response.data);
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
    getProductCategoryData();
  }, []);

  const onDrop = useCallback((acceptedFiles, index) => {
    const file = acceptedFiles[0]; // Get the first file
    console.log("onDrop file:", file, "index:", index);

    setDetail((prevDetail) => {
      const updatedDetail = [...prevDetail];
      // Create a temporary URL for local preview
      updatedDetail[index] = {
        ...updatedDetail[index],
        img: file, // Store the file object for preview
        tempImageUrl: URL.createObjectURL(file), // Store temporary URL
      };
      return updatedDetail;
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      // Assuming you only want to drop on the last one. Adjust logic if you want dropping on any detail
      if (detail.length > 0) {
        onDrop(acceptedFiles, detail.length - 1);
      } else {
        // Optionally handle case where there are no detail sections yet.
        console.warn("No detail section to drop onto.");
        toast.warn("Add a detail section first!"); // Provide user feedback
      }
    },
    multiple: false, // Only accept one file
  });

  const handleAddDetail = () => {
    setDetail((prevDetail) => [
      ...prevDetail,
      { id: new Date().getTime().toString(), img: null, tempImageUrl: null },
    ]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedDetails = await Promise.all(
        detail.map(async (detailItem) => {
          let imageUrlforDetail = "";

          if (detailItem.img) {
            // Only upload if an image has been selected
            const imageFormData = new FormData();
            imageFormData.append("image", detailItem.img); // Append the file object

            const imageUploadResponse = await axios.post(
              `${import.meta.env.VITE_API_URL}/service/upload-image`,
              imageFormData,
              { headers: { "Content-Type": "multipart/form-data" } }
            );
            imageUrlforDetail = imageUploadResponse.data.url; // Get the URL from the response
          }

          return {
            id: detailItem.id || new Date().getTime().toString(),
            img1st: imageUrlforDetail,
          };
        })
      );

      const product = {
        product_name: productName,
        stock,
        img: updatedDetails,
        product_category: productCategory,
        price,
        tag_list: tagList.split(",").map((tag) => tag.trim()),
        brand,
        item_weight: itemWeight,
        material,
        details,
      };

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/product/product-add`,
        product
      );

      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
        console.error("Backend error:", response.data);
      }
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Error adding product");
    }
  };
  return (
    <div className="w-[1300px]">
      <CommonDashboardHeader title={"Add New Product"} />
      <form onSubmit={handleSubmit} className="mt-6">
        <div className="grid grid-cols-2 gap-7 justify-normal items-start">
          <div>
            <div className="grid grid-cols-2 gap-3">
              <input
                className="px-2 py-1.5 border text-[14px] placeholder:text-[14px]"
                type="text"
                name="product_name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Product Name"
                required
              />
              <select
                name="productCategory"
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
                className="px-2 py-1.5 border text-[14px] placeholder:text-[14px] bg-white"
                required>
                <option value="">Select Category</option>
                {productCategories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <input
                className="px-2 py-1.5 border text-[14px] placeholder:text-[14px]"
                type="number"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
                required
              />
              <input
                className="px-2 py-1.5 border text-[14px] placeholder:text-[14px]"
                type="number"
                name="stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                placeholder="Stock"
                required
              />
              <input
                className="px-2 py-1.5 border text-[14px] placeholder:text-[14px]"
                type="text"
                name="brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                placeholder="Brand"
              />{" "}
              <input
                className="px-2 py-1.5 border text-[14px] placeholder:text-[14px]"
                type="text"
                name="material"
                value={material}
                onChange={(e) => setMaterial(e.target.value)}
                placeholder="Material"
              />
              <input
                className="px-2 py-1.5 border text-[14px] placeholder:text-[14px]"
                type="text"
                name="tag_list"
                value={tagList}
                onChange={(e) => setTagList(e.target.value)}
                placeholder="Tags (comma-separated)"
              />
              <input
                className="px-2 py-1.5 border text-[14px] placeholder:text-[14px]"
                type="text"
                name="item_weight"
                value={itemWeight}
                onChange={(e) => setItemWeight(e.target.value)}
                placeholder="Item Weight"
              />
            </div>
            <textarea
              name="details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Product Details"
              className="px-2 py-1.5 border text-[14px] placeholder:text-[14px] w-full mt-5 h-[200px]"
            />
          </div>
          <div className="grid grid-cols-1 gap-3">
            {/* <div className="mt-0">
              {detail.map((item, index) => (
                <div key={index} className="mb-6">
                  <div
                    {...getRootProps()}
                    className="grid grid-cols-2 justify-normal items-center gap-[18px]">
                    <div className="border border-dashed rounded-md flex flex-col justify-center items-center py-7">
                      <input {...getInputProps()} />
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
              ))}
              <button
                type="button"
                onClick={() =>
                  setDetail([
                    ...detail,
                    { question1: "", ans1: "", img: detailImage },
                  ])
                }
                className="mt-3 px-4 py-1 bg-blue-500 text-white w-full text-center">
                Add Detail +
              </button>
            </div> */}
            {/* Image Upload */}
            <div className="mt-0">
              {detail.map((item, index) => (
                <div key={item.id} className="mb-6">
                  <div
                    {...getRootProps()}
                    className="grid grid-cols-2 justify-normal items-center gap-[18px]"
                    style={{ cursor: "pointer" }}>
                    <input {...getInputProps()} />
                    <div className="border border-dashed rounded-md flex flex-col justify-center items-center py-7">
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
                    {item.tempImageUrl ? (
                      <div className="h-[140px] w-full bg-[#f8f0cf] flex justify-center items-center rounded-[4px]">
                        <img
                          src={item.tempImageUrl}
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
              ))}
              <button
                type="button"
                onClick={handleAddDetail}
                className="mt-3 px-4 py-1 bg-blue-500 text-white w-full text-center">
                Add Images +
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end ">
          <button
            type="submit"
            className={`w-[180px] flex justify-center items-center gap-2 px-4 py-2 bg-[#C2A74E] font-semibold text-white`}>
            {loading ? "Loading..." : "Add Product"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
