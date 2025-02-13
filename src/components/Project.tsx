import Image from "next/image";
import CustomHeading from "./common/CustomHeading";
import { PROJECT_LIST } from "@/utils/helper";

interface ProjectItem {
  image: string;
  description: string;
  icon: React.ReactNode; 
}

const Project = () => {
  return (
    <div className="md:py-[70px] lg:py-[60px] max-md:py-8 -mt-[1px]" id="project">
      <div className="max-w-[1140px] mx-auto max-md:px-4 max-lg:px-8">
        <div className="lg:flex-row flex flex-col xl:gap-[109px] lg:gap-[53px] gap-10">
          <div className="lg:max-w-[550px] max-lg:mx-auto max-lg:w-full about flex flex-col justify-center">
            <CustomHeading text="THE PROJECT" myClass="pb-5 max-md:pb-[35px]" />
            {PROJECT_LIST.map((obj, i) => (
              <div key={i} className="flex gap-5 pb-2 items-start">
                <div className="">{obj.icon}</div>
                <p className="text-white tracking-[1.5px] text-base leading-custom-xl max-w-[511px] max-lg:max-w-none font-normal">
                  {obj.description}
                </p>
              </div>
            ))}
          </div>
          <div className="image flex max-lg:justify-center">
            <Image
              src="/assets/images/webp/girl-image.webp"
              alt="project-image"
              width={471}
              height={626}
              className="max-xl:w-full max-w-[471px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
