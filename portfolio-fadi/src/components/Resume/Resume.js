import React from "react";
import './Resume.css';
import reactt from "./images/react.png";
import Js from "./images/JS.png";
import css from "./images/css.png";
import jquery from "./images/jquery.png";
import html from "./images/html.png";
import bootstrap from "./images/bootstrap.png";
import git from "./images/git.png";


function Resume() {
  return (
    <React.Fragment>
      <section data-aos="fade-left" className=" container banner-section" >
        <div className="text-left w-50 about-title text-white ">
        <h1 className=" dev-name mb-1 mt-5">Skills.</h1>
        </div>
        <div className="container">

        <div data-aos="fade-down-right" class="col-2-12  aos-init aos-animate">
        <div class="mt-5" id="skillsDivs" style={{display:"inline-block"}}>
        
        <ul className="sk1">
           <li> 
            <img width="80px" src={reactt} alt="react-logo"/>

            <p className="text-white">React</p>
            </li>

            <li>
            <img width="80px" src={Js} alt="JS-logo"/>
            
            <p className="text-white">JavaScript</p>
            </li>

        <li>
            <img width="80px" src={css} alt="Css-logo"/>
            
            <p className="text-white">CSS3</p>
            </li>
         <li>
            <img width="80px" src={html} alt="Html-logo"/>
            
            <p className="text-white">Html5</p>
          </li>
          </ul>
          <ul className="sk2 ">
            <li>
            <img width="80px" src={bootstrap} alt="BootStrap-logo"/>
            
            <p className="text-white">BootStrap</p>
            </li>
            <li> 
            <img width="80px" src={jquery} alt="jQuery-logo"/>
          
            <p className="text-white">JQuery</p>
            </li>
        <li>
            <img width="80px" src={git} alt="Git-logo"/>
         
            <p className="text-white">Git</p>
            </li>
            </ul>
            
        </div>
        </div>
        </div>
      </section>
      
 
      
    </React.Fragment>
  );
}
export default Resume;
