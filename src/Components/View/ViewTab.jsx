import React from "react";
import DisplayObject from "../DisplayArray/DisplayObject";
import { BsFillSquareFill } from "react-icons/bs";
import {
  PiBracketsCurlyDuotone,
  PiBracketsSquareDuotone,
} from "react-icons/pi";

const ViewTab = ({ json = {} }) => {
  const displayArray = (arr) => {
    return arr.map(([key, val], i) => {
      const type = Array.isArray(val) ? (
        <PiBracketsSquareDuotone
          style={{ fontSize: "30px", marginBottom: "-10px" }}
        />
      ) : typeof val === "object" ? (
        <PiBracketsCurlyDuotone
          style={{ fontSize: "30px", marginBottom: "-10px" }}
        />
      ) : (
        <BsFillSquareFill style={{ fontSize: "8px" }} />
      );
      return (
        <div key={key} className="text">
          {type}&nbsp;
          {key}: &nbsp;
          {Array.isArray(val) ? (
            <DisplayObject>
              {val.map((item, index) =>
                typeof item === "object"
                  ? displayArray(Object.entries(item))
                  : displayArray([[index, item]])
              )}
            </DisplayObject>
          ) : typeof val === "object" ? (
            <DisplayObject>{displayArray(Object.entries(val))}</DisplayObject>
          ) : (
            JSON.stringify(val)
          )}
        </div>
      );
    });
  };

  const x = JSON.parse(json);
  const js = Array.isArray(x) ? { ...x } : x;

  return <div className="display-json">{displayArray(Object.entries(js))}</div>;
};

export default ViewTab;
