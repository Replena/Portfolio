import React from "react";

function Skills() {
  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">Java Script</h3>
          <p className="">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">React.Js</h3>
          <p className="">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Node.Js</h3>
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
