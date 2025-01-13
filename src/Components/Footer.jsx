import React from "react";

const Footer = () => {
  return (
    <div className="">
      <footer className="p-20 bg-black text-white">
        <div className="w-[1200px] mx-auto flex justify-between items-start text-[14px] px-7">
          {" "}
          <nav className="flex flex-col justify-normal items-start gap-y-3">
            <header className="text-white font-semibold tracking-[0.2rem] text-[18px]">
              Services
            </header>
            <a className="link link-hover tracking-[0.1rem]">Branding</a>
            <a className="link link-hover tracking-[0.1rem]">Design</a>
            <a className="link link-hover tracking-[0.1rem]">Marketing</a>
            <a className="link link-hover tracking-[0.1rem]">Advertisement</a>
          </nav>
          <nav className="flex flex-col justify-normal items-start gap-y-3">
            <header className="text-white font-semibold tracking-[0.2rem] text-[18px]">
              Company
            </header>
            <a className="link link-hover tracking-[0.1rem]">About us</a>
            <a className="link link-hover tracking-[0.1rem]">Contact</a>
            <a className="link link-hover tracking-[0.1rem]">Jobs</a>
            <a className="link link-hover tracking-[0.1rem]">Press kit</a>
          </nav>
          <nav className="flex flex-col justify-normal items-start gap-y-3">
            <header className="text-white font-semibold tracking-[0.2rem] text-[18px]">
              Legal
            </header>
            <a className="link link-hover tracking-[0.1rem]">Terms of use</a>
            <a className="link link-hover tracking-[0.1rem]">Privacy policy</a>
            <a className="link link-hover tracking-[0.1rem]">Cookie policy</a>
          </nav>
          <form>
            <header className="text-white font-semibold tracking-[0.2rem] text-[18px]">
              Newsletter
            </header>
            <fieldset className="form-control w-80">
              <label>
                <span className=" text-white tracking-[0.1rem] mt-2">
                  Enter your email address
                </span>
              </label>
              <div className="relative mt-3">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered w-full h-10 pr-16 text-black rounded-none"
                />
                <button className="buttonNLog bNLog absolute top-0 right-0 rounded-none">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </footer>

      <div className="bg-black border-t py-4 border-gray-600 ">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center text-[14px] px-7">
          <div className="flex justify-center items-center gap-10 text-white">
            <p>Services</p>
            <p>Faqs</p>
            <p>My Account</p>
            <p>Privacy</p>
          </div>
          <p className="text-white">© 2023 Copyrights, All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
