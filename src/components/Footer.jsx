import React from "react";

function Footer() {
  return (
    <footer className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 flex">
          <h2 className="text-3xl font-bold flex-start">
            Let's work together on your next product.
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <a href="mailto:alimsauce@gmail.com" className="mb-4 md:mb-0">
            alimsauce@gmail.com
          </a>
          <div className="flex space-x-4">
            <a href="https://personalblog.com" target="_blank" className="">
              Personal Blog
            </a>
            <span className="">|</span>
            <a href="https://github.com" target="_blank" className="">
              Github
            </a>
            <span className="">|</span>
            <a href="https://linkedin.com" target="_blank" className="">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
