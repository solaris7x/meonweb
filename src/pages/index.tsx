import type { NextPage } from "next"

import CommonHeaders from "../components/Home/CommonHeaders"
import Splash from "../components/Home/Splash"
import About from "../components/Home/About"
import Skills from "../components/Home/Skills"
import Qualifications from "../components/Home/Qualifications"

const Home: NextPage = () => {
  return (
    <>
      <CommonHeaders />
      <>
        {/* <NavBar /> */}
        <div className="h-16 bg-violet-400 w-full"></div>
        {/* Main */}
        <main className="mx-[15%]">
          {/* Home */}
          <Splash />
          {/* About */}
          <About />
          {/* Skills */}
          <Skills />
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
          {/* TODO: Portfolio */}
          {/* <section className="portfolio section" id="projects"></section> */}
          {/* Contact Me */}
          {/* <ContactMe /> */}
        </main>
        <div className="py-10"></div>
        {/* Footer */}
        {/* <Footer /> */}
        {/* Scroll Top */}
        {/* <a href="#" className="scrollup" id="scroll-up">
          <Icon icon="uil:arrow-up" className=" scrollup_icon" />
        </a> */}
      </>
    </>
  )
}

export default Home
