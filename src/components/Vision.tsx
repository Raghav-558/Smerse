import React from "react";
import { VISION_LIST } from "@/utils/helper";
import Description from "./common/Description";
import CustomHeading from "./common/CustomHeading";

const Vision = () => {
  return (
    <>
      <div
        id="vision"
        className="max-w-[1140px] mx-auto max-md:px-4 max-lg:px-8 pb-[60px] max-lg:pb-[70px] max-md:pb-[35px]"
      >
        <CustomHeading text="THE VISION" myClass="!mx-auto" />
        <div className="flex flex-wrap -mx-3 pt-[138px] max-lg:pt-32 max-sm:pt-[88px]">
          {VISION_LIST.map((item, i) => (
            <div
              key={i}
              className={`w-1/3 max-lg:px-4 max-lg:w-1/2 max-sm:w-full ${
                i === 1
                  ? "max-sm:pt-[88px]"
                  : i === 2
                  ? "max-lg:pt-[84px] max-sm:pt-[88px]"
                  : ""
              }`}
            >
              <div className="relative bg-gradient-to-b cursor-pointer from-light-purple via-light-pink to-light-orange rounded-[10px] h-full !p-[1px] group">
                <div className="rounded-[10px] px-7 max-sm:px-4 pt-[90px] !pb-8 h-[365px] bg-light-gray hover:bg-transparent transition-all duration-300">
                  <Description
                    text={item.description}
                    myClass="leading-[27.2px] text-center"
                  />
                </div>
                <div className="!size-24 max-sm:!size-[86px] absolute rounded-full top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-gradient-to-b from-light-purple via-light-pink to-light-orange p-[1px]">
                  <div className="w-full h-full rounded-full flex items-center justify-center bg-light-gray group-hover:bg-transparent transition-all duration-300">
                    <CustomHeading
                      text={item.number}
                      myClass={
                        "!text-[36px] max-lg:!text-5xl max-md:!text-[36px]"
                      }
                      spanClass={
                        "!text-[36px] max-lg:!text-5xl max-md:!text-[36px]"
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Vision;



// import React from "react";
// import CustomHeading from "./common/CustomHeading";
// import { VISION_LIST } from "@/utils/helper";

// const TheVision = () => {
//   return (
//     <div id="vision" className="lg:pt-48 md:pt-26 pt-16">
//       <div className="container max-w-[1142px] mx-auto max-xl:px-5">
//         <CustomHeading
//           textOne="THE VISION"
//           textTwo="THE VISION"
//           myClassOne="mb-5 max-lg:mb-3 max-md:mb-[17px] mx-auto text-center !z-[1] "
//           myClassTwo="text-center"
//         />
//         <div className="flex lg:justify-center gap-y-16 max-lg:flex-wrap gap-5 lg:pt-[138px] md:pt-24 pt-16">
//           {VISION_LIST.map((obj, i) => (
//             <div
//               key={i}
//               className="bg-gradient-to-t to-light-purple via-light-pink from-light-orange p-[1px] group rounded-[10px]"
//             >
//               <div className="max-w-[367px] w-full text-center md:px-7 px-5 bg-shade-blue h-[363px] group-hover:bg-transparent transition-all duration-300 rounded-[10px]">
//                 <div className="max-w-[96px] translate-y-[-48px] mx-auto h-24 bg-gradient-to-t to-light-purple via-light-pink from-light-orange p-[1px] rounded-full ">
//                   <div className="text-white bg-dark-purple rounded-full flex items-center group-hover:bg-transparent transition-all duration-300 justify-center h-full ">
//                     <CustomHeading
//                       textOne={obj.number}
//                       textTwo={obj.number}
//                       myClassOne="mb-0 text-4xl mx-auto text-center "
//                       myClassTwo="text-center text-4xl"
//                     />
//                   </div>
//                 </div>
//                 <div className="text-white max-w-[312px] tracking-[6%] leading-[27.2px]">
//                   <p>{obj.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TheVision;