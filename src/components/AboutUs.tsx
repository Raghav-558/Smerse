import { ABOUT_US_LIST } from "@/utils/helper";
import React from "react";
import Image from "next/image";
import CustomHeading from "./common/CustomHeading";
import Description from "./common/Description";

const AboutUs = () => {
  return (
    <div className="pt-[150px] pb-[178px] max-lg:py-[96px] max-md:py-[60px]">
      <div className="max-w-[1140px] mx-auto max-md:px-4 max-lg:px-8">
        <div className="flex items-center justify-between max-lg:justify-center max-lg:flex-wrap">
          <div>
            <CustomHeading
              text="About Us"
              myClass="pb-7 max-lg:pb-5 max-sm:pb-[35px] relative z-20"
              spanClass="!top-[1.5px]"
            />
            {ABOUT_US_LIST.map((obj, i) => (
              <div key={i} className="flex gap-5 pt-2">
                <div>{obj.icon}</div>
                <Description
                  text={obj.description}
                  myClass="lg:max-w-[510px] pb-2 max-lg:pb-3"
                />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
