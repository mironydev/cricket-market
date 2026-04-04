import React, { useState } from "react";
import footeIMG from "../../assets/logo-footer.png";
import bannerBG from "../../assets/bg-shadow.png";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <div className=" relative bg-[#06091A] text-white pt-60">
      <div
        id="newsletter"
        className="
            absolute
            top-0
            -translate-y-1/2
            left-0
            right-0
            w-11/12
            lg:w-5/6 
            mx-auto 
            text-center
            py-12
            md:py-18
            bg-white
            border
            border-gray-300
            rounded-3xl
            text-black
            outline-2
            outline-white
            outline-offset-20
            shadow-[0_0_0_20px_#ffffff3c]
            px-2"
      >
        <img
          src={bannerBG}
          alt=""
          className="absolute select-none inset-0 w-full h-full object-cover rounded-3xl"
        />
        <div className="relative z-10">
          <h2 className="text-3xl font-bold">Subscribe to our Newsletter</h2>
          <p className="pt-1 pb-5 opacity-70">
            Get the latest updates and news right in your inbox!
          </p>
          <div>
            <div className="join">
              <div>
                <label className="input join-item focus-within:border-stone-800 outline-0 duration-100">
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </g>
                  </svg>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              </div>
              <button
                className="btn btn-success text-white join-item"
                onClick={() => setEmail("")}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-11/12 lg:w-5/6 mx-auto">
        <figure className="flex justify-center pb-10">
          <img src={footeIMG} alt="" />
        </figure>
        <div className="flex flex-col md:flex-row justify-between gap-15 md:gap-20">
          <div className="space-y-3 flex-1 text-center md:text-left">
            <h3 className="font-semibold text-xl">About Us</h3>
            <p className="opacity-60">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>
          <div className="space-y-3 list-disc flex-1 flex flex-col items-center">
            <h3 className="font-semibold text-xl">Quick Links</h3>
            <ul className="space-y-3 list-disc">
              <li className="opacity-60 hover:opacity-100">
                <a href="/">Home</a>
              </li>
              <li className="opacity-60 hover:opacity-100">
                <a href="/">Services</a>
              </li>
              <li className="opacity-60 hover:opacity-100">
                <a href="/">About</a>
              </li>
              <li className="opacity-60 hover:opacity-100">
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
          <div className="space-y-3 flex-1 text-center md:text-left">
            <h3 className="font-semibold text-xl">Subscribe</h3>
            <p className="opacity-60">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="join">
              <div>
                <label className="input join-item focus-within:border-[#626262] outline-0 duration-100">
                  <svg
                    className="text-black h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </g>
                  </svg>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="text-black"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              </div>
              <button
                className="btn btn-success join-item"
                onClick={() => setEmail("")}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="opacity-60 border-t border-gray-200/40 text-center py-7 mt-20">
        © 2026 CricketMarket - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
