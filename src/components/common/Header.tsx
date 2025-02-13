"use client";
import { HEADER_LIST } from "@/utils/helper";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const closeHandler = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleOverflow = () => {
      if (open && window.innerWidth < 1025) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("resize", handleOverflow);
    window.addEventListener("scroll", handleScroll);

    handleOverflow();

    return () => {
      window.removeEventListener("resize", handleOverflow);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  return (
    <div
      className={`!mx-auto w-full fixed top-0 z-50 transition-all duration-300 py-2 xl:py-4 ${
        scrolled ? "bg-black" : "bg-custom-black"
      }`}
    >
      <div className="max-w-[1140px] max-md:px-4 max-lg:px-8 mx-auto flex items-center justify-between">
        <a href="/">
          <Image
            src="/assets/images/webp/page-logo.webp"
            alt="page-logo"
            width={68}
            height={68}
            className="pointer-events-none size-[68px] max-md:size-10"
          />
        </a>
        <div
          className={`flex gap-[59px] max-lg:gap-10 max-md:gap-5 max-lg:fixed max-lg:top-0 max-lg:-right-full max-lg:h-full max-lg:w-full max-lg:justify-center max-lg:items-center transition-all duration-300 max-lg:flex-col max-lg:bg-gradient-to-t to-light-purple from-light-pink max-lg:!z-20 ${
            open ? "max-lg:!right-0" : ""
          }`}
        >
          <div className="flex max-lg:flex-col gap-5 max-lg:gap-4 items-center">
            {HEADER_LIST.map((item, i) => (
              <a
                key={i}
                onClick={closeHandler}
                href={item.link}
                className="text-white !whitespace-nowrap max-md:text-base font-normal text-base max-lg:text-lg leading-[19.2px] hover:text-blue-400 transition-all duration-300"
              >
                {item.title}
              </a>
            ))}
          </div>
          <div className="max-lg:hidden max-md:block">
            <button
              onClick={closeHandler}
              className="!font-[800] text-lg leading-6 text-white py-[11px] max-md:text-base w-[148px] max-sm:w-[110px] !tracking-[6%] custom-gradient rounded-lg !shadow-[0px_4px_4px_0px_#ff676b33]"
            >
              Mint Now
            </button>
          </div>
        </div>
        <div className="flex items-center gap-10 lg:hidden">
          <button className="!font-[800] text-xl max-md:text-base leading-6 text-white py-[11px] w-[148px] max-sm:w-[110px] !tracking-[6%] custom-gradient rounded-lg !shadow-[0px_4px_4px_0px_#ff676b33] lg:hidden max-md:hidden">
            Mint Now
          </button>
          <button
            onClick={handleClick}
            className="flex flex-col gap-2 max-md:gap-1.5 max-sm:!gap-[2px] items-center justify-between relative z-20 overflow-hidden size-6.5 lg:hidden"
          >
            <span
              className={`w-10 max-lg:w-[39px] max-sm:w-[14px] h-[5px] max-lg:h-[3px] transition-all duration-300 bg-white rounded-lg ${
                open ? "translate-x-10" : ""
              }`}
            ></span>
            <span
              className={`w-10 max-lg:w-[39px] max-sm:w-[14px] h-[5px] max-lg:h-[3px] transition-all duration-300 bg-white rounded-lg relative ${
                open ? "rotate-45" : ""
              } ${
                open ? "after:rotate-90" : ""
              } after:absolute after:top-0 after:left-0 after:w-10 max-lg:after:w-[39px] max-sm:after:w-[14px] after:h-[5px] max-lg:after:h-[3px] after:bg-white after:rounded-lg`}
            ></span>
            <span
              className={`w-10 max-lg:w-[39px] max-sm:w-[14px] h-[5px] max-lg:h-[3px] transition-all duration-300 bg-white rounded-lg ${
                open ? "-translate-x-10" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
