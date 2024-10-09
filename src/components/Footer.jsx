import { useLanguage } from "../contexts/languageContext";
function Footer() {
  const { currentData } = useLanguage();
  if (!currentData) return <p>Loading...</p>;
  const colors = [
    "text-light-dark dark:text-dark-lightGray",
    "text-light-green dark:text-dark-green",
    "text-light-azure dark:text-dark-aquaBlue",
  ];
  return (
    <footer className="py-12 bg-light-beige dark:bg-dark-darkerGray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 flex">
          <h2 className="text-2xl lg:text-3xl font-bold dark:text-dark-blueGray text-light-black">
            {currentData.Footer.catchword}
          </h2>
        </div>
        <div className="flex flex-col gap-4 md:flex-row lg:justify-between lg:items-center dark:text-dark-lightPurple ">
          <a
            href="mailto:alimsauce@gmail.com"
            className="lg:my-12 mb-0 text-light-red"
          >
            <span className="">👉 {currentData.Footer.mail}</span>
          </a>
          <div className="lg:space-x-4 flex flex-col gap-4 lg:flex-row">
            {currentData.Footer.links.map((link, index) => (
              <a
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
