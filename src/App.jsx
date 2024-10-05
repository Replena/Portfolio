import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Profile from "./components/Profile.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import React from "react";
import "./App.css";
function App() {
  return (
    <div className="min-h-screen container mx-auto px-2">
      <Header />
      <main className="container mx-auto px-4">
        <Hero />
        <Skills />
        <Profile />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
