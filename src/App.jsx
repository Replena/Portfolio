import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Profile from "./components/Profile.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";
import { DarkModeContextProvider } from "./contexts/dataContext.jsx";

function App() {
  return (
    <DarkModeContextProvider>
      <div className="bg-white dark:bg-gray-900 text-secondary dark:text-white min-h-screen">
        <div className="min-h-screen container mx-auto px-2 ">
          <Header />
          <main className="container mx-auto px-4">
            <Hero />
            <Skills />
            <Profile />
            <Projects />
          </main>
        </div>
        <Footer />
      </div>
    </DarkModeContextProvider>
  );
}

export default App;
