import { useLanguage } from "../contexts/languageContext";
function Profile() {
  const { currentData } = useLanguage();
  if (!currentData) return <p>Loading...</p>;
  return (
    <section className="py-16">
      <h3 className="text-4xl font-semibold dark:text-dark-blueGray mb-6 text-light-black">
        {currentData.Profile.profileTitle}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="sub-heading">{currentData.Profile.profileTitle}</h3>
          <div className="space-y-4 text-black dark:text-white">
            <div className="flex">
              <strong className="w-1/3">
                {currentData.Profile.dateOfBirth}
              </strong>
              <span className="">{currentData.Profile.dateOfBirthValue}</span>
            </div>
            <div className="flex">
              <strong className="w-1/3">{currentData.Profile.location}</strong>
              <span className="">{currentData.Profile.locationValue}</span>
            </div>
            <div className="flex">
              <strong className="w-1/3">{currentData.Profile.education}</strong>
              <span className="">{currentData.Profile.educationValue}</span>
            </div>
            <div className="flex">
              <strong className="w-1/3 ">
                {currentData.Profile.preferredRole}
              </strong>
              <span className="">{currentData.Profile.preferredRoleValue}</span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="sub-heading">{currentData.AboutMe.aboutTitle}</h3>
          <p className="mb-4">{currentData.AboutMe.aboutDescription}</p>
        </div>
      </div>
    </section>
  );
}

export default Profile;
