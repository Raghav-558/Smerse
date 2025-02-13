import React from "react";
interface Descriptionprops {
  text: string;
  myClass?: string;
}
const Description = ({ myClass, text }: Descriptionprops) => {
  return (
    <p className={`${myClass} tracking-[6%] leading-6 text-white text-base `}>
      {text}
    </p>
  );
};

export default Description;
