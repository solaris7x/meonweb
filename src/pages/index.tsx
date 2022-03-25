import type { NextPage } from "next"
import Image from "next/image"
import Link from "next/link"
import CommonHead from "../components/CommonHead"

const Home: NextPage = () => {
  return (
    <>
      <CommonHead />
      <body>
        {/* Header */}
        <header className="header" id="header">
          <nav className="nav container">
            <Link href="/">
              <a className="nav_logo">Aditya Patil</a>
            </Link>

            <div className="nav_menu" id="nav-menu">
              <ul className="nav_list grid">
                <li className="nav_item">
                  <a href="#home" className="nav_link active-link">
                    <i className="uil uil-estate nav_icon"></i> Home
                  </a>
                </li>
                <li className="nav_item">
                  <a href="#about" className="nav_link">
                    <i className="uil uil-user nav_icon"></i> About
                  </a>
                </li>
                <li className="nav_item">
                  <a href="#skills" className="nav_link">
                    <i className="uil uil-file-alt nav_icon"></i> Skills
                  </a>
                </li>
                <li className="nav_item">
                  <a href="#qualification" className="nav_link">
                    <i className="uil uil-graduation-cap nav_icon"></i>{" "}
                    Qualifications
                  </a>
                </li>
                {/* <li className="nav_item">
            <a href="#projects" className="nav_link">
              <i className="uil uil-scenery nav_icon"></i> Projects
            </a>
          </li> */}
                <li className="nav_item">
                  <a href="#contact" className="nav_link">
                    <i className="uil uil-message nav-icon nav_icon"></i>{" "}
                    Contact Me
                  </a>
                </li>
              </ul>
              <i className="uil uil-times nav_close" id="nav-close"></i>
            </div>

            <div className="nav_btns">
              {/* Change Theme */}
              <i className="uil uil-moon change-theme" id="theme-button"></i>

              <div className="nav_toggle" id="nav-toggle">
                <i className="uil uil-apps"></i>
              </div>
            </div>
          </nav>
        </header>

        {/* Main */}
        <main className="main">
          {/* Home */}
          <section className="home section" id="home">
            <div className="home_container container grid">
              <div className="home_content grid">
                <div className="home_social">
                  <Link href="https://www.linkedin.com/in/patil11aditya/">
                    <a className="home_social-icon" target="_blank">
                      <i className="uil uil-linkedin-alt"></i>
                    </a>
                  </Link>

                  <Link href="https://github.com/solaris7x">
                    <a className="home_social-icon" target="_blank">
                      <i className="uil uil-github-alt"></i>
                    </a>
                  </Link>

                  <Link href="https://twitter.com/_solaris7">
                    <a className="home_social-icon" target="_blank">
                      <i className="uil uil-twitter-alt"></i>
                    </a>
                  </Link>
                </div>

                <div className="home_img">
                  <img
                    src="./assets/img/me.jpg"
                    alt="Aditya Patil"
                    className="home_blob-img"
                  />
                </div>

                <div className="home_data">
                  <h1 className="home_title">Hi, I{"'"}m Aditya</h1>
                  <h3 className="home_subtitle">
                    I am <span className="type"></span> Developer
                  </h3>

                  <p className="home_description">
                    Open-Source enthusiast and self learner, believes in the
                    power of community.
                  </p>
                  <a href="#contact" className="button button--flex">
                    Contact Me
                    <i className="uil uil-message"></i>
                  </a>
                </div>
              </div>

              <div className="home_scroll">
                <a href="#about" className="home_scroll-button button--flex">
                  <i className="uil uil-mouse-alt home_scroll-mouse"></i>
                  <span className="home_scroll-name">Scroll Down</span>
                  <i className="uil uil-arrow-down home_scroll-arrow"></i>
                </a>
              </div>
            </div>
          </section>

          {/* About */}
          <section className="about section" id="about">
            <h2 className="section_title">About Me</h2>
            <span className="section_subtitle">My introduction</span>
            <div className="about_container container">
              <div className="about_data">
                <div className="about_description">
                  Hi! 👋 I{"'"}m Aditya, A Dev/Ops engineering that aims to
                  provide a seamless journey from development to operations with
                  a strong grasp of Web technologies and Cloud Computing Saas,
                  PaaS, laaS deployment pipelines. Well-versed in Linux-based OS
                  (Debian, Ubuntu, alpine...), containerization technology
                  (Docker + compose), and cloud vendors (GCP, AWS, Azure,
                  Heroku, Netlify) applied to increase software delivery
                  velocity, improve service reliability. Frequently praised as
                  adaptable by my peers and enjoy working among a progressive
                  team. Additionally has a background in Cloud-Native App
                  Development and MERN stack.
                </div>
                <div className="about_button">
                  <a
                    download=""
                    href="assets/pdf/Aditya-Resume.pdf"
                    className="button button--flex"
                  >
                    Resume
                    <i className="uil uil-file-download-alt button_icon"></i>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="skills section" id="skills">
            <h1 className="section_title">Skills</h1>
            <span className="section_subtitle">My Technical Skills</span>
            <div className="skills_container container grid">
              {/* Skill Set 1 */}
              <div className="skill skills_content skills_open">
                <div className="skills_header">
                  <i className="uil uil-arrow skills_icon"></i>

                  <div>
                    <h1 className="skills_title">Languages</h1>
                    <span className="skills_subtitle">
                      Languages that I have picked up over the years
                    </span>
                  </div>

                  <i className="uil uil-angle-down skills_arrow"></i>
                </div>

                <div className="skills_list grid">
                  <div className="skills_data">
                    <div className="skills_titles">
                      <span className="single_skill_icon">
                        <i className="fab fa-python"></i>
                      </span>
                      <h3 className="skills_name">Python</h3>
                    </div>
                    <div className="skills_bar"></div>
                  </div>

                  <div className="skills_data">
                    <div className="skills_titles">
                      <span className="single_skill_icon">
                        <i className="fab fa-html5"></i>
                      </span>
                      <h3 className="skills_name">HTML</h3>
                    </div>
                    <div className="skills_bar"></div>
                  </div>

                  <div className="skills_data">
                    <div className="skills_titles">
                      <span className="single_skill_icon">
                        <i className="fab fa-css3-alt"></i>
                      </span>
                      <h3 className="skills_name">CSS</h3>
                    </div>
                    <div className="skills_bar"></div>
                  </div>

                  <div className="skills_data">
                    <div className="skills_titles">
                      <span className="single_skill_icon">
                        <i className="fab fa-js-square"></i>
                      </span>
                      <h3 className="skills_name">JavaScript</h3>
                    </div>
                    <div className="skills_bar"></div>
                  </div>

                  <div className="skills_data">
                    <div className="skills_titles">
                      <span className="single_skill_icon">
                        <i className="fab fa-sass"></i>
                      </span>
                      <h3 className="skills_name">SASS</h3>
                    </div>
                    <div className="skills_bar"></div>
                  </div>
                </div>
              </div>

              {/* Skill Set 2 */}
              <div className="skill skills_content">
                <div className="skills_header">
                  <i className="uil uil-brackets-curly skills_icon"></i>

                  <div>
                    <h1 className="skills_title">Libraries & Frameworks</h1>
                    <span className="skills_subtitle">
                      Libraries and Frameworks that I prefer to work with
                    </span>
                  </div>

                  <i className="uil uil-angle-down skills_arrow"></i>
                </div>

                <div className="skills_list grid">
                  <div className="skills_data">
                    <div className="skills_titles">
                      <span className="single_skill_icon">
                        <i className="fab fa-react"></i>
                      </span>
                      <h3 className="skills_name">ReactJS</h3>
                    </div>
                    <div className="skills_bar"></div>
                  </div>

                  <div className="skills_data">
                    <div className="skills_titles">
                      <span className="single_skill_icon">
                        <i className="fab fa-node-js"></i>
                      </span>
                      <h3 className="skills_name">NodeJS</h3>
                    </div>
                    <div className="skills_bar"></div>
                  </div>

                  <div className="skills_data">
                    <div className="skills_titles">
                      <span className="single_skill_icon">
                        <i className="fab fa-bootstrap"></i>
                      </span>
                      <h3 className="skills_name">Bootstrap</h3>
                    </div>
                    <div className="skills_bar"></div>
                  </div>

                  <div className="skills_data">
                    <div className="skills_titles">
                      <span className="single_skill_icon external-logo">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 54 33"
                        >
                          <g clipPath="url(#prefix__clip0)">
                            <path
                              fill="#6E57E0"
                              fillRule="evenodd"
                              d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                              clipRule="evenodd"
                            />
                          </g>
                          <defs>
                            <clipPath id="prefix__clip0">
                              <path fill="#fff" d="M0 0h54v32.4H0z" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <h3 className="skills_name">Tailwind CSS</h3>
                    </div>
                    <div className="skills_bar"></div>
                  </div>
                </div>
              </div>

              {/* Skill Set 3 */}
              <div className="skill skills_content">
                <div className="skills_header">
                  <i className="uil uil-wrench skills_icon"></i>

                  <div>
                    <h1 className="skills_title">Tools</h1>
                    <span className="skills_subtitle">
                      Tools that I know and use on a daily basis
                    </span>
                  </div>

                  <i className="uil uil-angle-down skills_arrow"></i>
                </div>

                <div className="skills_list grid">
                  <div className="skills_data">
                    <div className="skills_titles">
                      <span className="single_skill_icon">
                        <i className="fab fa-git-alt"></i>
                      </span>
                      <h3 className="skills_name">Git</h3>
                    </div>
                    <div className="skills_bar"></div>
                  </div>

                  <div className="skills_data">
                    <div className="skills_titles">
                      <span className="single_skill_icon">
                        <i className="fab fa-github"></i>
                      </span>
                      <h3 className="skills_name">GitHub</h3>
                    </div>
                    <div className="skills_bar"></div>
                  </div>

                  <div className="skills_data">
                    <div className="skills_titles">
                      <span className="single_skill_icon external-logo">
                        <img src="./assets/img/Firebase.png" alt="" />
                      </span>
                      <h3 className="skills_name">Firebase</h3>
                    </div>
                    <div className="skills_bar"></div>
                  </div>

                  <div className="skills_data">
                    <div className="skills_titles">
                      <span className="single_skill_icon">
                        <i className="fab fa-figma"></i>
                      </span>
                      <h3 className="skills_name">Figma</h3>
                    </div>
                    <div className="skills_bar"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Qualifications */}
          <section className="qualification section" id="qualification">
            <h2 className="section_title">Qualifications</h2>
            <span className="section_subtitle">
              My Educational Qualification & Work Experience
            </span>

            <div className="qualification_container container">
              <div className="qualification_tabs">
                <div
                  className="qualification_button button-flex"
                  id="educationheader"
                >
                  <i className="uil uil-graduation-cap qualification_icon"></i>
                  Education
                </div>

                <div
                  className="qualification_button button-flex"
                  id="workheader"
                >
                  <i className="uil uil-briefcase-alt qualification_icon"></i>
                  Work
                </div>
              </div>

              <div className="qualification_sections">
                {/* Educational Qualification */}
                <div
                  className="qualification_content qualification_active"
                  data-content
                  id="education"
                >
                  {/* BTech IT */}
                  <div className="qualification_data">
                    <div>
                      <h3 className="qualification_title">
                        BTech Computer Science & Engineering (Cloud Technology &
                        Information Security)
                      </h3>
                      <span className="qualification_subtitle">
                        Jain Deemed-to-be University
                      </span>
                      <div className="qualification_calendar">
                        <i className="uil uil-calendar-alt"></i>
                        2018 - 2022
                      </div>
                    </div>

                    <div>
                      <span className="qualification_circle"></span>
                      <span className="qualification_line"></span>
                    </div>
                  </div>

                  {/* School 11-12 */}
                  <div className="qualification_data">
                    <div></div>

                    <div>
                      <span className="qualification_circle"></span>
                      <span className="qualification_line"></span>
                    </div>

                    <div>
                      <h3 className="qualification_title">12th - PCM-CS</h3>
                      <span className="qualification_subtitle">
                        Muljibhai Mehta International School, Virar
                      </span>
                      <div className="qualification_calendar">
                        <i className="uil uil-calendar-alt"></i>
                        2016 - 2017
                      </div>
                    </div>
                  </div>

                  {/* School 1-10 */}
                  <div className="qualification_data">
                    <div>
                      <h3 className="qualification_title">10th - CBSE</h3>
                      <span className="qualification_subtitle">
                        Muljibhai Mehta International School, Virar
                      </span>
                      <div className="qualification_calendar">
                        <i className="uil uil-calendar-alt"></i>
                        2014 - 2015
                      </div>
                    </div>
                    <div>
                      <span className="qualification_circle"></span>
                    </div>
                  </div>
                </div>

                {/* Work Experience */}
                <div
                  className="qualification_content qualification-inactive"
                  data-content
                  id="work"
                >
                  {/* TODO: similar as above tabs */}
                </div>
              </div>
            </div>
          </section>

          {/* TODO: Portfolio */}

          {/* <section className="portfolio section" id="projects"></section> */}

          {/* Contact Me */}
          <section className="contact section" id="contact">
            <h1 className="section_title">Contact Me</h1>
            <span className="section_subtitle">
              Want to connect? My inbox is always open!
            </span>

            <div className="contact_container container grid">
              <div>
                <Link href="mailto:patil11aditya@gmail.com" passHref>
                  <div className="contact_info">
                    <i className="uil uil-envelope-alt contact_icon"></i>
                    <div>
                      <h3 className="contact_title">Email</h3>
                      <span className="contact_subtitle">
                        patil11aditya@gmail.com
                      </span>
                    </div>
                  </div>
                </Link>

                <Link href="https://twitter.com/_solaris7">
                  <a target="_blank">
                    <div className="contact_info">
                      <i className="uil uil-twitter-alt contact_icon"></i>
                      <div>
                        <h3 className="contact_title">Twitter</h3>
                        <span className="contact_subtitle">@_solaris7</span>
                      </div>
                    </div>
                  </a>
                </Link>

                <div className="contact_info">
                  <i className="uil uil-location-point contact_icon"></i>
                  <div>
                    <h3 className="contact_title">Location</h3>
                    <span className="contact_subtitle">Mumbai, India</span>
                  </div>
                </div>
              </div>

              <form
                action="https://formspree.io/f/mpzbdoaw"
                className="contact_form grid"
                id="contact-form"
                method="POST"
              >
                <div id="alert" className="alert_style"></div>
                <div className="contact_inputs grid">
                  <div className="contact_content">
                    <label className="contact_label">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="contact_input"
                      id="name"
                      required
                    />
                  </div>
                  <div className="contact_content">
                    <label htmlFor="email" className="contact_label">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="contact_input"
                      id="email"
                      required
                    />
                  </div>
                </div>
                <div className="contact_content">
                  <label htmlFor="subject" className="contact_label">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    className="contact_input"
                    id="subject"
                    required
                  />
                </div>
                <div className="contact_content">
                  <label htmlFor="message" className="contact_label">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    cols={0}
                    rows={7}
                    className="contact_input message"
                    required
                  ></textarea>
                </div>

                <div>
                  <button type="submit" className="button button-flex">
                    Send Message
                    <i className="uil uil-message button_icon"></i>
                  </button>
                </div>
              </form>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="footer_bg">
            <div className="footer_container container grid">
              <div>
                <h1 className="footer_title">Aditya Patil</h1>
                <span className="footer_subtitle">Cloud Developer</span>
              </div>

              <ul className="footer_links">
                <li>
                  <a href="#about" className="footer_link">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="footer_link">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="footer_link">
                    Contact Me
                  </a>
                </li>
              </ul>

              <div className="footer_socials">
                <Link href="https://www.linkedin.com/in/patil11aditya/">
                  <a target="_blank" className="footer_social">
                    <i className="uil uil-linkedin-alt"></i>
                  </a>
                </Link>
                <Link href="https://twitter.com/_solaris7">
                  <a target="_blank" className="footer_social">
                    <i className="uil uil-twitter-alt"></i>
                  </a>
                </Link>
              </div>
            </div>

            <p className="footer_copy">
              &#169; Aditya Patil. All rights reserved
            </p>
          </div>
        </footer>

        {/* Scroll Top */}
        <a href="#" className="scrollup" id="scroll-up">
          <i className="uil uil-arrow-up scrollup_icon"></i>
        </a>

        {/* Swiper JS
        <script src="./assets/js/swiper-bundle.min.js"></script>

        Typed JS
        <script src="./assets/js/typed.js"></script>

        <script src="./assets/js/main.js"></script> */}
      </body>
    </>
  )
}

export default Home
