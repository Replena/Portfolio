import React, { lazy, Suspense } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import LazyLoading from "./components/lazyLoading";
import "react-toastify/dist/ReactToastify.css";
import { useDarkMode } from "./contexts/darkModeContext";
const Hero = lazy(() => import("./components/Hero"));
const Skills = lazy(() => import("./components/Skills"));
const Profile = lazy(() => import("./components/Profile"));
const Projects = lazy(() => import("./components/Projects"));
const Footer = lazy(() => import("./components/Footer"));
const Header = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("./components/Header")), 2000)
    )
);
function App() {
  const { darkMode } = useDarkMode();
  return (
    <Suspense fallback={<LazyLoading />}>
      <div className="bg-white dark:bg-gray-900 text-secondary dark:text-white min-h-screen font-sans">
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
      <ToastContainer
        position="top-center"
        autoClose={2000}
        limit={3}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Suspense>
  );
}

export default App;
