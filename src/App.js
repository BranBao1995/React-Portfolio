import React, { useState } from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("about");

  const setPageToRender = (targetPage) => {
    setActivePage(targetPage);
  };

  const renderPage = () => {
    if (activePage === "about") {
      return <About />;
    } else if (activePage === "projects") {
      return <Projects />;
    } else if (activePage === "contact") {
      return <Contact />;
    } else if (activePage === "resume") {
      return <Resume />;
    }
  };

  return (
    <div className="page">
      <Header pageActive={activePage} onSetPage={setPageToRender} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
