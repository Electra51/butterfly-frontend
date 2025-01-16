import { FcGoogle } from "react-icons/fc";
import logonCover from "../../assets/coverLogo/loginCover.webp";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineGithub,
} from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import AuthHeader from "../../Components/Common/AuthHeader";
import AuthFooter from "../../Components/Common/AuthFooter";

const Login = () => {
  const [show, setShow] = useState(false);
  const handleLogin = () => {
    console.log("login");
  };
  return (
    <div
      style={{
        backgroundImage: `url(${logonCover})`,
        backgroundRepeat: "no-repeat",
        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}>
      <div className="max-w-sm mx-auto pt-14 relative">
        <AuthHeader
          title={"LOG IN"}
          link={"/login"}
          bread={"login"}
          right={0}
        />
        <form onSubmit={handleLogin}>
          <div className="form-control">
            <label htmlFor="email" className="font-medium text-[14px] mt-2">
              Email
            </label>
            <input
              type="email"
              placeholder="email"
              id="email"
              name="email"
              className="border border-gray-300 px-2 py-1.5 text-[14px] rounded-none w-full mt-1 placeholder:text-[14px]"
            />
            {/* {errors.email && (
              <span className="text-red-500 text-base mt-1">
                Please enter a valid email address.
              </span>
            )} */}
          </div>

          <div className="form-control">
            <label htmlFor="password" className="font-medium text-[14px] mt-4">
              Password
            </label>
            <div className="relative">
              <input
                type={`${show ? "text" : "password"}`}
                placeholder="password"
                id="password"
                name="password"
                className="border border-gray-300 px-2 py-1.5 text-[14px] rounded-none w-full mt-1 placeholder:text-[14px]"
              />
              {/* {errors.password && (
                <span className="text-red-500 text-base mt-1">
                  Please enter a password.
                </span>
              )} */}
              {show ? (
                <AiOutlineEye
                  className="absolute top-4 right-3 text-xl text-gray-600 cursor-pointer"
                  onClick={() => setShow(!show)}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className="absolute top-4 text-xl right-3 text-gray-400 cursor-pointer"
                  onClick={() => setShow(!show)}
                />
              )}
            </div>

            <a href="#" className="text-[13px] link link-hover text-right">
              Forgot password?
            </a>
          </div>
          <button className="h-[35px] !w-[384px] b3 mt-7" type="submit">
            Login
          </button>
          <AuthFooter
            title={"Don't have an account? "}
            link={"/register"}
            head={"Register"}
          />
          <div className="flex justify-normal items-center gap-12 mt-2">
            <button
              className="button b1 mt-7 text-[14px] px-1"
              type="submit"
              //   onClick={() => signIn("github")}
            >
              Login with Github <AiOutlineGithub className="text-2xl" />
            </button>
            <button
              className="button b1 mt-7 text-[14px]"
              type="submit"
              //   onClick={handleGoogleLogin}
            >
              Login with Google <FcGoogle className="text-2xl " />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
