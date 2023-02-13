import React, { useState } from "react";
// import { Box, useMediaQuery } from "@mui/material";
import { json, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
// import { useSelector } from "react-redux";
// import Navbar from "components/Navbar";
// import Sidebar from "components/Sidebar";
// import { useGetUserQuery } from "states/api";

const Layout = () => {
  // const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    <>
      {/* <Sidebar
        user={data || {}}
        isNonMobile={isNonMobile}
        drawerWIdth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      /> */}
      <Navbar
      // user={data || {}}
      // isSidebarOpen={isSidebarOpen}
      // setIsSidebarOpen={setIsSidebarOpen}
      />
    </>
  );
};

export default Layout;
