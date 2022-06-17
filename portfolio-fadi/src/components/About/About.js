import React from "react";
import { useState } from "react";
import "./About.css";
import responsive from "./images/responsive.png";
import laptop from "./images/simpleLaptop.png";
import webDesign from "./images/webDesign.png";

function About() {
  return (
        <React.Fragment>
          

      <section data-aos="fade-left" className=" container banner-section">
        <div className="text-left w-50 about-title text-white">
          <h1 className="mb-1 mt-5">About Me.</h1>
        </div>
        <div className=" mt-5">
          <h3>Web Developer</h3>
          <p >
         I'm a Telecom Engineer,
        Self-taught programmer with a flair for creating modern and elegant looking web-apps
          that are responsive, functional and dynamic. Highly-motivated, always trying to improve 
          my programming skills by coding and learning something new every single day. New things get me so excited and I think being able to be molded to your stack is a valuable thing. I always try to learn
          something or reinforce what I know from the people around me. I think, like education, learning never ends.
          
          </p>
        </div>
        <h3 className="text-center mt-3 mb-3">Interests</h3>
        <div className="row text-left">
          
          <div className="col-md-6">
            <div className="text-center " >
            <img src={responsive} alt=""  />
            <h4 className="mt-3"> Front-end Developer</h4>
            </div>
            
            <p>
            I love responsive design, always planning carefully the UI and thinking how will affect the UX.
             My purpose is to give a great UX building accesible, intuitive UI. Consciously trying to 
             improve code quality and decrease code entropy. The boy scouts of America have a simple rule: 
             “Leave the campground cleaner than you found it ”. The same rule applies to programmers. 
             Always leave the checked in code cleaner than the code that is checked out.
            </p>
          </div>

          <div className="col-md-6">
          <div className="text-center " >
            <img src={laptop} alt="" />
            <h4 className="mt-3">Web Development</h4>
            </div>
            <p>
            The ability to collaborate with clients and peers is crucial for web development.
             Respecting the others ideas and space also. Nothing is more rewarding when hard work pays off.
              Results oriented, self-driven, in a continuous process of learning and improving my skills as
               a web developer. I like good practices, trying to apply the boy scouts rule from the earlier
               paragraph.
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
export default About;
