import { useLanguage } from "../contexts/languageContext";

function Skills() {
  const { currentData } = useLanguage();

  return (
    <section id="Skills" data-cy="skills-container" className="py-16 ">
      <h2
        data-cy="skills-title"
        className="text-center text-5xl lg:text-left font-semibold dark:text-dark-blueGray mb-6 lg:mb-0 text-light-black"
      >
        {currentData.Skills.title}
      </h2>
      <div
        data-cy="skills-grid"
        className="lg:grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {currentData.Skills.skill.map((skill, index) => (
          <div data-cy={`skill-${index}`} key={index}>
            <h3 data-cy="skill-title" className="sub-heading my-8">
              {skill.title}
            </h3>
            <p>{skill.content}</p>
          </div>
        ))}
      </div>
      <hr data-cy="skills-hr" className="mt-20" />
    </section>
  );
}

export default Skills;
