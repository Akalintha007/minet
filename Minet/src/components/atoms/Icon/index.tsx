import React from "react";
interface Props {
  icon?: any;
  alt?: string
}

const Icon = ({ icon, alt }: Props) => {
  return (
    <>
      <img src={icon} alt={alt}/>
    </>
  );
};

export default Icon;
