import React from "react";
import Header from "./common/Header";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="bg-hero bg-no-repeat bg-cover !max-sm:mobile-view bg-center pt-[100px] max-lg:pt-[84px] max-md:pt-14 pink-blur relative overflow-hidden">
        <Header />
        
        <div className="max-w-[1176px] mx-auto px-4 second-blur relative">
          <div className="flex items-center justify-center flex-col pt-[52px] max-lg:pt-[79px] max-sm:pt-[113px]">
            <Image
              src="/assets/images/webp/hero-logo.webp"
              alt="hero-image"
              width={404}
              height={241}
              className="pointer-events-none max-lg:w-[381px] max-md:w-[256px] max-md:h-[154px]"
            />
            <div className="relative">
              <h1 className="pt-8 max-sm:pt-[108px] text-8xl font-black text-white tracking-[6px] relative z-10 leading-[120%] max-md:text-[40px] max-md:pt-10">
                SMERSE
              </h1>
              <span className="absolute inset-0 text-8xl max-md:text-[40px] leading-[120%] font-black bg-gradient-to-t to-light-purple via-light-pink from-light-orange bg-clip-text text-transparent tracking-[6px] top-[23.5%] -translate-x-0.5 max-md:top-[46%] max-md:left-[0.5px] max-sm:top-[70%]">
                SMERSE
              </span>
            </div>
            <p className="font-semibold text-4xl leading-[54px] tracking-[6%] text-white max-w-[637px] text-center pt-[10px] max-sm:pt-8 max-md:text-xl max-md:leading-[30px]">
              FOR A WHEALTHIER LIFESTYLE. ANYTIME, ANYWHERE
            </p>
            <div className="pt-11 max-sm:pt-[82px] max-md:pb-[85px] max-lg:pb-[105px] lg:pb-[50px]">
              <button className="!font-[800] text-xl max-md:text-base leading-6 text-white h-[56px] w-[172px] max-md:w-[130px] max-md:h-[48px] !tracking-[6%] bg-gradient-to-t to-light-purple via-light-pink from-light-orange rounded-lg drop-shadow-[0px_4px_4px_0px_#ff676b33]">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="custom-gradient h-10 drop-shadow-[0px_0px_15.01px_#FFFFFF80]"></div>
    </>
  );
};

export default Hero;
