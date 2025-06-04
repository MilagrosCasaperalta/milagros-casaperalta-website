import "./App.css";
import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import CookieConsent from "react-cookie-consent";
import Hero from "./components/Hero";
import { ContactForm } from "./components/ContactForm";
import Header from "./components/Header";
import AboutTimeline from "./components/AboutTimeline";

function App() {

    useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_MEASUREMENT_ID);
    ReactGA.send("pageview");
  }, []);


  return (
  <>
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
    </>
  );
}

export default App;
