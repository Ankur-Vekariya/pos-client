import React from "react";
import { Button, Dropdown, Space } from "antd";
import Responsive from "../utils/responsive";

const Header = () => {
  const size = Responsive();
  const width = Responsive();

  console.log("height",size.height.current);

  return (
    <div className="navbar" style={{ backgroundColor: "red", display: "flex" }}>
      <div style={{ backgroundColor: "yellow", width: "300px" }}>
        <h1>Hello</h1>
      </div>
      <div
        style={{
          backgroundColor: "green",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Button>secondary</Button>
        <Button>secondary</Button>
        <Button>secondary</Button>
        <Button>secondary</Button>
      </div>
    </div>
  );
};

export default Header;
