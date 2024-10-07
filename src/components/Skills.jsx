import React from "react";

function Skills() {
  return (
    <section id="skills" className="py-16">
      <h2 className="text-4xl font-semibold dark:text-dark-blueGray mb-6 text-light-black">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="sub-heading">Java Script</h3>
          <p className="">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div>
          <h3 className="sub-heading">React.Js</h3>
          <p className="">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div>
          <h3 className="sub-heading">Node.Js</h3>
          <p className="">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
