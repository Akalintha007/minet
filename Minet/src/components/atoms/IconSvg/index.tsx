import { SvgIcon } from "@mui/material";
import React, { ElementType } from "react";
interface Props {
  component: ElementType;
}

const IconSvg:React.FC<Props> = ({component}) => {
  return (
    <>
      <SvgIcon component={component}/>
    </>
  );
};

export default IconSvg;
