import React from "react";
import Footer from "../homepage/Footer";
import Header from "../homepage/Header";

const HeaderFooter = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default HeaderFooter;
