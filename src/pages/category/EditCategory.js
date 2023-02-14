import React, { useEffect } from "react";
import { Input } from "antd";
import Navbar from "../../components/Navbar";

const EditCategory = () => {
  

  return (
    <div>
      <Navbar />
      <label>Category Name</label>
      <Input placeholder="Basic usage" />
    </div>
  );
};

export default EditCategory;
