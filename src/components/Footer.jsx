import React from "react";

function Footer() {
  return (
    <footer className="py-12 bg-light-beige dark:bg-dark-darkerGray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 flex">
          <h2 className="text-3xl font-bold dark:text-dark-blueGray text-light-black">
            Let's work together on your next product.
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center dark:text-dark-lightPurple underline">
          <a
            href="mailto:alimsauce@gmail.com"
            className="mb-4 md:mb-0 text-light-red"
          >
            alimsauce@gmail.com
          </a>
          <div className="flex space-x-4">
            <a
              href="https://personalblog.com"
              target="_blank"
              className="text-light-dark"
            >
              Personal Blog
            </a>

            <a
              href="https://github.com"
              target="_blank"
              className="text-light-green"
            >
              Github
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="text-light-azure"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
