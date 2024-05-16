import { useState } from "react";
import "../styles/App.css";
import ContactSection from "./ContactSection.jsx";
import EducationSection from "./EducationSection.jsx";
import WorkSection from "./WorkSection.jsx";
import AboutSection from "./AboutSection.jsx";

function App() {
  return (
    <>
      <h1>Robert Sitek</h1>
      <h3>Passionate Java Developer</h3>
      <AboutSection />
      <WorkSection />
      <EducationSection />
      <ContactSection />
    </>
  );
}

export default App;
