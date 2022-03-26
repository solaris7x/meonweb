import type { NextPage } from "next"

import CommonHeaders from "../components/Home/CommonHeaders"
import Splash from "../components/Home/Splash"
import About from "../components/Home/About"
import Skills from "../components/Home/Skills"

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
          {/* <Qualifications /> */}
          {/* TODO: Portfolio */}
          {/* <section className="portfolio section" id="projects"></section> */}
          {/* Contact Me */}
          {/* <ContactMe /> */}
        </main>
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
