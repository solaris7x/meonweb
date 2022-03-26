import SkillList from "./Skills/SkillList"

const Skills = () => {
  return (
    <section className="mt-16" id="skills">
      <h1 className="text-4xl font-bold text-center">Skills</h1>
      <div className="text-gray-500 text-center">
        Some of my Technical Skills
      </div>
      <div className="my-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 ">
        <SkillList
          icon="ant-design:code-outlined"
          title="Runtimes"
          subtitle="Runtimes that I have picked up over the years"
          skills={[
            {
              icon: "logos:python",
              title: "Python",
            },
            {
              icon: "logos:typescript-icon",
              title: "Typescript",
            },
            {
              icon: "logos:javascript",
              title: "Javascript",
            },
            {
              icon: "logos:nodejs",
              title: "NodeJS",
            },
            {
              icon: "logos:html-5",
              title: "HTML",
            },
            {
              icon: "logos:css-3",
              title: "CSS",
            },
          ]}
        />
        <SkillList
          icon="ant-design:code-sandbox-outlined"
          title="Libraries & Frameworks"
          subtitle="Libraries and Frameworks that I prefer to work with"
          skills={[
            {
              icon: "logos:react",
              title: "ReactJS",
            },
            {
              icon: "logos:tailwindcss-icon",
              title: "TailwindCSS",
            },
          ]}
        />
        <SkillList
          icon="ant-design:tool-outlined"
          title="Tools"
          subtitle="Tools that I use to build my projects"
          skills={[
            {
              icon: "logos:git",
              title: "Git",
            },
            {
              icon: "logos:github",
              title: "Github",
            },
            {
              icon: "logos:npm",
              title: "NPM",
            },
          ]}
        />
      </div>
    </section>
  )
}
export default Skills
