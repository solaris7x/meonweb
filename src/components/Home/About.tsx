import { Icon } from "@iconify/react"

const About = () => {
  return (
    <section className="mt-16" id="about">
      <h2 className="text-4xl font-bold text-center">About Me</h2>
      <div className="text-gray-500 text-center">My introduction</div>
      <div className="my-12">
        <div className="text-lg">
          Hi! 👋 I{"'"}m Aditya, A Dev/Ops engineering that aims to provide a
          seamless journey from development to operations with a strong grasp of
          Web technologies and Cloud Computing Saas, PaaS, laaS deployment
          pipelines. Well-versed in Linux-based OS (Debian, Ubuntu, alpine...),
          containerization technology (Docker + compose), and cloud vendors
          (GCP, AWS, Azure, Heroku, Netlify) applied to increase software
          delivery velocity, improve service reliability. Frequently praised as
          adaptable by my peers and enjoy working among a progressive team.
          Additionally has a background in Cloud-Native App Development and MERN
          stack.
        </div>
        <button className="my-2 bg-violet-500 text-white rounded-lg self-start">
          <a
            href="/assets/pdf/Aditya-Resume.pdf"
            className="flex items-center p-4"
          >
            Resume
            <Icon icon="uil:file-download-alt" className="" />
          </a>
        </button>
      </div>
    </section>
  )
}
export default About
