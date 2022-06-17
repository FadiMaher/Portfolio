import React from "react";
import "./Contact.css";
import email from "./images/email.png";
import linkedin from "./images/linkedin.png";
import github from "./images/github.png";
import fb from "./images/fb.png";
function Contact() {
  const urlfb = "https://www.facebook.com/profile.php?id=100006611590873";
  const urlLinkedin =
    "https://www.linkedin.com/in/fadihlaihel/";
  const urlGit = "https://github.com/FadiMaher";
  const urlGmail = "mailto:fadi-h-@hotmailcom";
  return (
    <React.Fragment>
      <section  id="about" data-aos="fade-right">
        <div data-aos="zoom-in-up" className="container h-100 ">
          <div className="text-left w-50 contact-title ">
            <h1 className="mb-1 pt-5">Contact Me.</h1>
          </div>
         

          <h5 className="mt-5 mb-5">
            I'm available for hire and open to any ideas<br></br> of cooperation
          </h5>
        
          <h6>
            <a
              href="mailto:fadi-h-@hotmail.com"
              target="_blank"
              className=" social-text   hoverLine"
            >
              {" "}
              <img src={email} className="mr-2 mb-3" width="40px" alt="email" />
        fadi-h-@hotmail.com
            </a>
          </h6>
          <p>
            <a
              className=" social-text  hoverLine"
              data-toggle="tooltip"
              data-placement="top"
              title="Linkedin"
              href={urlLinkedin}
              target="_blank "
            >
              <img src={linkedin} className="mr-2 mb-4" width="40px" alt="linkedin link" />{" "}
              Fadi Hlaihel
            </a>
          </p>
          <p>
            <a
              className="social-text hoverLine"
              data-toggle="tooltip"
              data-placement="top"
              title="Github"
              href={urlGit}
              target="_blank"
            >
              <i className="fa fa-github mr-2 mb-4" aria-hidden="true"   ></i>
               
              Fadi Maher{" "}
            </a>
          </p>
          <p>
            <a
              className="social-text hoverLine"
              data-toggle="tooltip"
              data-placement="top"
              title="Twitter"
              href={urlfb}
              target="_blank"
            >
              <i className="fa fa-linkedin mr-2 mb-4 fc" aria-hidden="true" ></i>
              {" "}
              Fadi Maher 
            </a>
          </p>
        </div>
      </section>
    </React.Fragment>
  );
}
export default Contact;
