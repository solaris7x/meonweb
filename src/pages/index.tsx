import type { NextPage } from "next"

import CommonHeaders from "../components/Home/CommonHeaders"
import Splash from "../components/Home/Splash"
import About from "../components/Home/About"
import Skills from "../components/Home/Skills"
import Qualifications from "../components/Home/Qualifications"
import ContactMe from "../components/Home/ContactMe"
import Footer from "../components/Footer"
import NavBar from "../components/Home/NavBar"

const Home: NextPage = () => {
  return (
    <>
      <CommonHeaders />
      <>
        <NavBar
          title="Aditya Patil"
          links={[
            {
              name: "Home",
              href: "/",
              icon: "uil:estate",
            },
            {
              name: "About",
              href: "/#about",
              icon: "uil:user",
            },
            {
              name: "Skills",
              href: "/#skills",
              icon: "uil:file-alt",
            },
            {
              name: "Qualifications",
              href: "/#qualification",
              icon: "uil:graduation-cap",
            },
            {
              name: "Contact Me",
              href: "/#contact",
              icon: "uil:message",
            },
          ]}
        />
        {/* Main */}
        <main className="mx-[12%]">
          {/* Home */}
          <Splash
            name="Aditya"
            profession={["an Cloud", "a Web", "a CI/CD"]}
            professionSuffix="Developer"
            subtitle="Open-Source enthusiast and self learner, believes in the power of
            community."
            coverImgLink="./assets/img/me.jpg"
            social={[
              {
                icon: "uil:linkedin-alt",
                href: "https://www.linkedin.com/in/patil11aditya/",
              },
              {
                icon: "uil:github-alt",
                href: "https://github.com/solaris7x",
              },
              {
                icon: "uil:twitter-alt",
                href: "https://twitter.com/_solaris7",
              },
            ]}
          />
          {/* About */}
          <About
            introduction="Hi! 👋 I'm Aditya, A Dev/Ops engineering that aims to provide a
          seamless journey from development to operations with a strong grasp of
          Web technologies and Cloud Computing Saas, PaaS, laaS deployment
          pipelines. Well-versed in Linux-based OS (Debian, Ubuntu, alpine...),
          containerization technology (Docker + compose), and cloud vendors
          (GCP, AWS, Azure, Heroku, Netlify) applied to increase software
          delivery velocity, improve service reliability. Frequently praised as
          adaptable by my peers and enjoy working among a progressive team.
          Additionally has a background in Cloud-Native App Development and MERN
          stack."
            resumeLink="/assets/pdf/Aditya-Resume.pdf"
          />
          {/* Skills */}
          <Skills
            skillLists={[
              {
                icon: "ant-design:code-outlined",
                title: "Runtimes",
                subtitle: "Runtimes that I have picked up over the years",
                skills: [
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
                ],
              },
              {
                icon: "ant-design:code-sandbox-outlined",
                title: "Libraries & Frameworks",
                subtitle: "Libraries and Frameworks that I prefer to work with",
                skills: [
                  {
                    icon: "logos:react",
                    title: "ReactJS",
                  },
                  {
                    icon: "logos:tailwindcss-icon",
                    title: "TailwindCSS",
                  },
                ],
              },
              {
                icon: "ant-design:tool-outlined",
                title: "Tools",
                subtitle: "Tools that I use to build my projects",
                skills: [
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
                ],
              },
            ]}
          />
          {/* Qualifications */}
          <Qualifications
            tabs={[
              {
                icon: "uil:graduation-cap",
                title: "Education",
                items: [
                  {
                    title:
                      "BTech Computer Science & Engineering (Cloud Technology & Information Security)",
                    subtitle: "Jain Deemed-to-be University",
                    dateString: "2018 - 2022",
                  },
                  {
                    title: "12th - PCM-CS",
                    subtitle: "Muljibhai Mehta International School, Virar",
                    dateString: "2016 - 2017",
                  },
                  {
                    title: "10th - CBSE",
                    subtitle: "Muljibhai Mehta International School, Virar",
                    dateString: "2014 - 2015",
                  },
                ],
              },
            ]}
          />
          {/* Contact Me */}
          <ContactMe
            items={[
              {
                icon: "uil:envelope",
                title: "Email",
                subtitle: "patil11aditya@gmail.com",
                link: "mailto:patil11aditya@gmail.com",
              },
              {
                icon: "uil:twitter",
                title: "Twitter",
                subtitle: "@_solaris7",
                link: "https://twitter.com/_solaris7",
              },
              {
                icon: "uil:location-point",
                title: "Location",
                subtitle: "Mumbai, India",
              },
            ]}
          />
        </main>
        {/* Footer */}
        <Footer
          name="Aditya Patil"
          subtitle="Cloud Developer"
          links={[
            {
              title: "About",
              link: "#about",
            },
            {
              title: "Projects",
              link: "https://github.com/solaris7x?tab=repositories",
            },
            {
              title: "Contact Me",
              link: "#contact",
            },
          ]}
          social={[
            {
              icon: "uil:linkedin-alt",
              link: "https://www.linkedin.com/in/patil11aditya/",
            },
            {
              icon: "uil:twitter-alt",
              link: "https://twitter.com/_solaris7",
            },
            {
              icon: "uil:github",
              link: "https://github.com/solaris7x",
            },
          ]}
        />
        {/* Scroll Top */}
        {/* <a href="#" className="scrollup" id="scroll-up">
          <Icon icon="uil:arrow-up" className=" scrollup_icon" />
        </a> */}
      </>
    </>
  )
}

export default Home
