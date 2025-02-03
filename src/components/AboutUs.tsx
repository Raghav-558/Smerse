import { ABOUT_US_LIST } from "@/utils/helper";
import React from "react";
import Image from "next/image";
import CustomHeading from "./common/CustomHeading";

const AboutUs = () => {
  return (
    <div className="pt-[150px] pb-[178px] max-lg:py-[96px] max-md:py-[60px]">
      <div className="max-w-[1176px] mx-auto px-4">
        <div className="flex items-center justify-between max-lg:justify-center max-lg:flex-wrap">
          <div>
            <CustomHeading
              textOne="About Us"
              textTwo="About Us"
              myClassOne="mb-5 max-lg:mb-3 max-md:mb-[17px]"
            />
            {ABOUT_US_LIST.map((obj, i) => (
              <div key={i} className="flex gap-5 pt-2">
                <div className="">{obj.icon}</div>
                <p className="text-white tracking-[1.5px] text-base leading-custom-xl max-w-[560px] max-lg:max-w-none font-normal">
                  {obj.description}
                </p>
              </div>
            ))}
          </div>
          <div className="relative max-lg:pt-20">
            <Image
              width={478.06}
              height={478.31}
              src="/assets/images/webp/about-us-img.webp"
              alt="about-image"
              className="pointer-events-none"
            />
            {/* <Image width={635} height={679} src='' alt="layer" />
        <Image width={635} height={679} src='' alt="layer" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
