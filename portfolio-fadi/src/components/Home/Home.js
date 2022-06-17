import React from "react";
import Typed from "./../Typed/Typed"
import "./Home.css";
function Home() {
  return (
    <React.Fragment>
      <section  data-aos="zoom-in-up"
        id="home"
        className="banner-section   pt-page page-active"
        data-simplebar="init"
      >
        <div className="text-center home-text text-white">

          <h1 className=" dev-name mb-5">
            Fadi  <br />  <span className="dev-surname "> Hlaihel</span> <br />
            PortFolio

          </h1>
      

          <h2 className="mt-5 typed "><Typed></Typed></h2>
        </div>
       

      </section>
    </React.Fragment>
  );
}
export default Home;