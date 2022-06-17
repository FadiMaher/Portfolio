import React, { useEffect } from "react";
import 'aos/dist/aos.css';
import "./App.css";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/Home/Home";
import AboutMe from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";
import AOS from "aos";
import { Route, Switch, BrowserRouter } from "react-router-dom";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200
    });

  })


  return (
    
    <React.Fragment>
      
      <div className="">
        
        <BrowserRouter>
            
          <Layout>
          
            <Switch>
              <Route exact path="/" render={props=><HomePage/>}/>
              <Route exact path="/home" render={props => <HomePage />} />
              <Route exact path="/about" render={props => <AboutMe />} />
              <Route exact path="/resume" render={props => <Resume />} />
              <Route exact path="/portfolio" render={props => <Portfolio />} />
              <Route exact path="/contact" render={props => <Contact />} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    </React.Fragment>
  );
}

export default App;
