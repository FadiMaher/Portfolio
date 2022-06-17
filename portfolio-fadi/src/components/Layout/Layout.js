import React from "react";
import Navigation from "./../Navigation/Navigation";

const Layout = props => {
  return (
    <>
      <Navigation />
      
      <div className="wrapper ml-auto">

      {props.children}
      </div>
    </>
  );
};

export default Layout;
