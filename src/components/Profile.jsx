import { useLanguage } from "../contexts/languageContext";

function Profile() {
  const { currentData } = useLanguage();

  return (
    <section className="lg:py-16">
      <h3 className="text-center lg:text-left text-4xl font-semibold dark:text-dark-blueGray mb-6 text-light-black">
        Profile
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="sub-heading">Profile</h3>
          <div className="space-y-4 text-black dark:text-white">
            {currentData.Profile.subProfile.map((item, index) => (
              <div className="flex" key={index}>
                <strong className="w-1/3">{item.title}</strong>
                <span className="w-2/3">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="sub-heading">{currentData.Profile.about.title}</h3>
          <p className="mb-4">{currentData.Profile.about.content}</p>
        </div>
      </div>
    </section>
  );
}

export default Profile;
