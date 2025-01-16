import registerCover from "../../assets/coverLogo/registerCover.webp";
import { useRef, useState } from "react";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineGithub,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import AuthHeader from "../../Components/Common/AuthHeader";
import { FaImage } from "react-icons/fa6";
import AuthFooter from "../../Components/Common/AuthFooter";

const Register = () => {
  const [show, setShow] = useState({ password: false, correctPass: false });
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleRegister = () => {
    console.log("register");
  };
  return (
    <div
      style={{
        backgroundImage: `url(${registerCover})`,
        backgroundRepeat: "no-repeat",
        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}>
      <div className="max-w-md mx-auto pt-14 relative">
        <AuthHeader
          title={"SIGN UP"}
          link={"/register"}
          bread={"Sign Up"}
          right={3}
        />
        <form onSubmit={handleRegister} className=" mt-6">
          <div className="grid grid-cols-2 gap-3 items-center">
            <div className="form-control">
              <label htmlFor="name" className="font-medium text-[14px]">
                Name
              </label>
              <input
                type="text"
                placeholder="name"
                id="name"
                name="name"
                className="border border-gray-300 px-2 py-1.5 text-[14px] rounded-none w-full mt-1 placeholder:text-[14px]"
              />
            </div>
            <div className="form-control">
              <label htmlFor="email" className="font-medium text-[14px]">
                Email
              </label>
              <input
                type="email"
                placeholder="email"
                id="email"
                name="email"
                className="border border-gray-300 px-2 py-1.5 text-[14px] rounded-none w-full mt-1 placeholder:text-[14px]"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 items-start mt-3">
            <div>
              <div className="form-control relative">
                <label htmlFor="password" className="font-medium text-[14px]">
                  Password
                </label>
                <input
                  type={`${show.password ? "text" : "password"}`}
                  placeholder="password"
                  id="password"
                  name="password"
                  className="border border-gray-300 px-2 py-1.5 text-[14px] rounded-none w-full mt-1 placeholder:text-[14px]"
                />

                {show.password ? (
                  <AiOutlineEye
                    className="absolute top-9 right-3 text-xl text-gray-600 cursor-pointer"
                    onClick={() =>
                      setShow({ ...show, password: !show.password })
                    }
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute top-9 text-xl right-3 text-gray-400 cursor-pointer"
                    onClick={() =>
                      setShow({ ...show, password: !show.password })
                    }
                  />
                )}
              </div>
              <div className="form-control relative mt-4">
                <label
                  htmlFor="confirmPassword"
                  className="font-medium text-[14px]">
                  Confirm Password
                </label>
                <input
                  type={`${show.correctPass ? "text" : "password"}`}
                  placeholder="Confirm Password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="border border-gray-300 px-2 py-1.5 text-[14px] rounded-none w-full mt-1 placeholder:text-[14px]"
                />

                {show.correctPass ? (
                  <AiOutlineEye
                    className="absolute top-9 right-3 text-xl text-gray-600 cursor-pointer"
                    onClick={() =>
                      setShow({ ...show, correctPass: !show.correctPass })
                    }
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute top-9 text-xl right-3 text-gray-400 cursor-pointer"
                    onClick={() =>
                      setShow({ ...show, correctPass: !show.correctPass })
                    }
                  />
                )}
              </div>
            </div>
            <div className="form-control">
              <label htmlFor="photo" className="font-medium text-[14px]">
                Photo
              </label>
              <div
                className="border border-gray-300 bg-[#FFFFFF] rounded-none h-[120px] w-full flex flex-col justify-center items-center mt-1 cursor-pointer"
                onClick={handleIconClick}>
                {previewImage ? (
                  <img
                    src={previewImage}
                    alt="Selected"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <>
                    <span className="text-[12px]">Add Photo +</span>
                    <FaImage className="text-2xl" />
                  </>
                )}
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
          <button className="h-[35px] !w-[448px] b3 mt-7" type="submit">
            Sign Up
          </button>
        </form>
        <AuthFooter
          title={"Already have an account? "}
          link={"/login"}
          head={"Login"}
        />
        <div className="flex justify-center items-center gap-6">
          <button className="buttons bs mt-7 text-[14px]" type="submit">
            Login with Github <AiOutlineGithub className="text-2xl pl-1.5" />
          </button>
          <button
            className="buttons bs mt-7 text-[14px]"
            type="submit"
            //   onClick={handleGoogleLogin}
          >
            Login with Google <FcGoogle className="text-2xl pl-1.5" />
          </button>
        </div>
        <div className="flex items-start justify-normal gap-1 mt-4 text-[14px]">
          <input type="checkbox" className="mt-1" />{" "}
          <p>
            By Creating your account you agree the{" "}
            <Link to="/terms">
              {" "}
              <span className="font-medium text-black underline hover:cursor-pointer hover:text-blue-500">
                Terms of Service
              </span>{" "}
            </Link>
            and{" "}
            <Link to="/policy">
              {" "}
              <span className="font-medium text-black underline hover:cursor-pointer hover:text-blue-500">
                Privacy Policy.
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
