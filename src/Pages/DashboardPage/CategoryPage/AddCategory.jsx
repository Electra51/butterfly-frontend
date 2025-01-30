import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FiPlus } from "react-icons/fi";

const AddCategory = ({ getCategoryData }) => {
  const [value, setValue] = useState({ name: "" });

  const handleCategoryAdd = async (e) => {
    e.preventDefault();
    const data = { name: value.name };
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/category/categories`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        getCategoryData();
        setValue({ name: "" });
        toast.success("Category Added Successfully !");
      } else {
        console.error("Failed to add category");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  return (
    <div className="w-[270px] bg-white mt-4 border-0 border-l ">
      <div className="pl-4">Add New Category</div>
      <form
        className="rounded px-4 pt-6 pb-8 mb-4 mt-2"
        onSubmit={handleCategoryAdd}>
        <div className="mb-4">
          <label className="block font-normal text-[14px] mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow-sm appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            value={value.name}
            onChange={(e) => {
              setValue((prev) => ({ ...prev, name: e.target.value }));
            }}
          />
        </div>

        <div className="flex items-center justify-start">
          <button
            className="bg-[#C2A74E] gap-1 hover:bg-[#C2A74E] text-white text-[14px] font-medium py-1.5 px-6 w-full focus:outline-none focus:shadow-outline flex justify-normal items-center"
            type="submit">
            <FiPlus className="text-white" /> Add New Category
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCategory;
