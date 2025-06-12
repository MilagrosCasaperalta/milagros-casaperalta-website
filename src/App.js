import "./App.css";
import React, { useEffect } from "react";
import axios from "axios";
import ReactGA from "react-ga4";
import CookieConsent from "react-cookie-consent";
import Hero from "./components/Hero";
import { ContactForm } from "./components/ContactForm";
import Header from "./components/Header";
import AboutTimeline from "./components/AboutTimeline";
import Projects from "./pages/projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {

 
useEffect(() => {

  // Google Analytics
  ReactGA.initialize(process.env.REACT_APP_GA_MEASUREMENT_ID);
  ReactGA.send("pageview");

  // FastAPI call
  axios.get("https://my-website-api-c80g.onrender.com/projects")
    .then((res) => {
      console.log("FastAPI response:", res.data);
    })
    .catch((err) => {
      console.error("FastAPI error:", err);
    });
}, []);


  return (
     <Router>


      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="cookie_consent"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        This site uses cookies (Google Analytics) to enhance your experience.
      </CookieConsent>

    <Routes>
      <Route
      path="/"
      element={
      <div>
        <Header />
        <div id="home">
          <Hero />
        </div>

        <div id="about me">
          <AboutTimeline />
        </div>

        <div id="contact">
          <ContactForm />
        </div>
      </div>
      }
      />

   <Route path="/projects" element={<Projects />} />

    </Routes>
    </Router>
  );
}

export default App;
