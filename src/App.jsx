import React, { lazy, Suspense } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import LazyLoading from "./components/lazyLoading";
import "react-toastify/dist/ReactToastify.css";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useLanguage } from "./contexts/languageContext";
function App() {
  const { loading, error } = useLanguage();
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      {loading ? (
        <LazyLoading />
      ) : (
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
      )}
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
    </>
  );
}

export default App;
