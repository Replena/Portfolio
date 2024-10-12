import { useLanguage } from "../contexts/languageContext";

function Profile() {
  const { currentData } = useLanguage();

  return (
    <section data-cy="profile-container" className="lg:py-0">
      <h3
        data-cy="profile-subheading"
        className="text-center lg:text-left text-5xl font-semibold dark:text-dark-blueGray mb-6 text-light-black"
      >
        {currentData.Profile.title}
      </h3>
      <div
        data-cy="profile-info"
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div>
          <h3 data-cy="profile-subheading" className="sub-heading">
            {currentData.Profile.title}
          </h3>
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
      <hr data-cy="profile-hr" className="lg:mt-20 mb-14" />
    </section>
  );
}

export default Profile;
