import React, { useState } from "react";
import CommonDashboardHeader from "../../../Components/Common/CommonDashboardHeader";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import toast from "react-hot-toast";

const Setting = () => {
  const userData = JSON.parse(localStorage.getItem("user-token"));
  const [show, setShow] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdatePassword = async () => {
    if (!oldPassword || !newPassword) {
      return toast.error("Both fields are required.");
    }

    try {
      setLoading(true);
      const response = await axios.put(
        `http://localhost:8080/api/v1/auth/change-password/${userData?.user?.email}`,
        { oldPassword, newPassword },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success(response.data.message || "Password updated successfully!");
      setOldPassword("");
      setNewPassword("");
    } catch (error) {
      toast.error(error.response?.data?.error || "Failed to update password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="m-2">
      <CommonDashboardHeader title={"Settings"} />
      <div className="my-6 w-[1000px]">
        <div className="w-1/2">
          {/* Current Password */}
          <div className="form-control">
            <label
              htmlFor="oldPassword"
              className="font-medium text-[14px] mt-4">
              Current Password
            </label>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                placeholder="Enter current password"
                id="oldPassword"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="border border-gray-300 px-2 py-1.5 text-[14px] w-full mt-1 placeholder:text-[14px]"
              />
              {show ? (
                <AiOutlineEye
                  className="absolute top-3 right-3 text-xl text-gray-600 cursor-pointer"
                  onClick={() => setShow(!show)}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className="absolute top-3 right-3 text-xl text-gray-400 cursor-pointer"
                  onClick={() => setShow(!show)}
                />
              )}
            </div>
          </div>

          {/* New Password */}
          <div className="form-control">
            <label
              htmlFor="newPassword"
              className="font-medium text-[14px] mt-4">
              New Password
            </label>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                placeholder="Enter new password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="border border-gray-300 px-2 py-1.5 text-[14px] w-full mt-1 placeholder:text-[14px]"
              />
              {show ? (
                <AiOutlineEye
                  className="absolute top-3 right-3 text-xl text-gray-600 cursor-pointer"
                  onClick={() => setShow(!show)}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className="absolute top-3 right-3 text-xl text-gray-400 cursor-pointer"
                  onClick={() => setShow(!show)}
                />
              )}
            </div>
          </div>

          {/* Save Button */}
          <button
            className="bg-[#0077B6] hover:bg-[#76C4EB] border border-[#0077B6] text-white text-[14px] rounded-sm px-2 py-1 mt-6"
            onClick={handleUpdatePassword}
            disabled={loading}>
            {loading ? "Updating..." : "Save Change"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Setting;
