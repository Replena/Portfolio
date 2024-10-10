import { useLanguage } from "../contexts/languageContext";

function Skills() {
  const { currentData } = useLanguage();

  return (
    <section id="skills" className="py-16">
      <h2 className="text-center text-5xl lg:text-left font-semibold dark:text-dark-blueGray mb-6 lg:mb-0 text-light-black">
        Skills
      </h2>
      <div className="lg:grid grid-cols-1 lg:grid-cols-3 gap-8">
        {currentData.Skills.map((skill, index) => (
          <div key={index}>
            <h3 className="sub-heading my-8">{skill.title}</h3>
            <p>{skill.content}</p>
          </div>
        ))}
      </div>
      <hr className="mt-20" />
    </section>
  );
}

export default Skills;
