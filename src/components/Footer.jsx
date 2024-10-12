import { useLanguage } from "../contexts/languageContext";
function Footer() {
  const { currentData } = useLanguage();
  const colors = [
    "text-light-dark dark:text-dark-lightGray",
    "text-light-green dark:text-dark-green",
    "text-light-azure dark:text-dark-aquaBlue",
  ];
  return (
    <footer
      id="Footer"
      data-cy="footer-container"
      className="py-12 bg-light-beige dark:bg-dark-darkerGray"
    >
      <div data-cy="footer-catchword" className="container mx-auto px-4">
        <div className="text-center mb-8 flex lg-text-left">
          <h2 className="text-2xl lg:text-5xl lg:w-2/3 lg:text-left  font-bold dark:text-dark-blueGray text-light-black">
            {currentData.Footer.catchword}
          </h2>
        </div>
        <div
          data-cy="footer-links"
          className="flex flex-col gap-4 md:flex-row md:justify-between lg:items-center dark:text-dark-lightPurple "
        >
          <a
            data-cy="footer-mail-link"
            href="mailto:alimsauce@gmail.com"
            className="lg:my-8 mb-0 text-light-red"
          >
            <span className="">👉 {currentData.Footer.mail}</span>
          </a>
          <div
            data-cy="footer-social-links"
            className="lg:space-x-4 flex flex-col gap-4 lg:flex-row"
          >
            {currentData.Footer.links.map((link, index) => (
              <a
                data-cy={`footer-link-${index}`}
                key={index}
                href="#"
                target="_blank"
                className={colors[index % colors.length]}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
