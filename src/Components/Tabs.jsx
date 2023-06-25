import React, { useState } from "react";
import ViewTab from "./View/ViewTab";
import InputTab from "./Input/InputTab";

const Tabs = () => {
  const [tabIndex, setTabIndex] = useState(2);
  const [json, setJson] = useState("{}");
  const handleInputChange = (e) => {
    setJson(e.target.value);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Json Viewer</h1>
      <div className="head">
        <button
          className="tab"
          onClick={() => {
            setTabIndex(1);
          }}
        >
          Viewer
        </button>
        <button
          className="tab"
          onClick={() => {
            setTabIndex(2);
          }}
        >
          Text
        </button>
      </div>
      {/* body */}
      <div className="body">
        {tabIndex === 1 ? (
          <ViewTab json={json} />
        ) : (
          <InputTab value={json} handleInputChange={handleInputChange} />
        )}
      </div>
      {/* body */}
    </div>
  );
};

export default Tabs;
