import logo from "./logo.svg";
import "./App.css";

import Hero from "./components/Hero";
import { ContactForm } from "./components/ContactForm";
import Header from "./components/Header";
import AboutTimeline from "./components/AboutTimeline";

function App() {
  return (
    <div>
      <Header />
      <div id = "home">
          <Hero />
      </div>
    
      <div id= "about me">
      <AboutTimeline />
      </div>
       <div id="contact">
  <ContactForm />
</div>
    </div>
  );
}

export default App;
