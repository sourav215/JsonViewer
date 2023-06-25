import React, { useState } from "react";
import { BsPlusSquareFill} from "react-icons/bs";
import { BiSolidMinusSquare } from "react-icons/bi";

const DisplayObject = ({ children }) => {
  const [show, setShow] = useState(false);
  if (!show) {
    return (
      <BsPlusSquareFill  style={{ fontSize: "15px", marginBottom: "-4px" }}
        onClick={() => {
          setShow(!show);
        }}
      />
    );
  }
  return (
    <>
      <BiSolidMinusSquare  style={{ fontSize: "20px", marginBottom: "-5px" }}
        onClick={() => {
          setShow(!show);
        }}
      />
      <div className="json-obj">{children}</div>
    </>
  );
};

export default DisplayObject;
