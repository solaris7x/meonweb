import Link from "next/link"
import { useEffect, useRef } from "react"
import { Icon } from "@iconify/react"
import Typed from "typed.js"

const Splash = () => {
  // Create reference to store the DOM element containing the animation
  const iamRef = useRef<any>(null)
  // Create reference to store the Typed instance itself
  const typed = useRef<any>(null)

  useEffect(() => {
    const options = {
      strings: ["an Cloud", "a Web", "a CI/CD"],
      smartBackspace: true,
      startDelay: 1000,
      typeSpeed: 130,
      backDelay: 1000,
      backSpeed: 60,
      loop: true,
    }

    // elRef refers to the <span> rendered below
    typed.current = new Typed(iamRef.current, options)

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy()
    }
  }, [])
  return (
    <section className="mt-5" id="home">
      <div className="min-h-[80vh] flex flex-col md:flex-row">
        {/* Social Buttons */}
        <div className="flex flex-row md:flex-col justify-center text-2xl text-violet-500">
          <Link href="https://www.linkedin.com/in/patil11aditya/">
            <a className="home_social-icon" target="_blank">
              <Icon icon="uil:linkedin-alt" className="m-3" />
            </a>
          </Link>

          <Link href="https://github.com/solaris7x">
            <a className="home_social-icon" target="_blank">
              <Icon icon="uil:github-alt" className="m-3" />
            </a>
          </Link>

          <Link href="https://twitter.com/_solaris7">
            <a className="home_social-icon" target="_blank">
              <Icon icon="uil:twitter-alt" className="m-3" />
            </a>
          </Link>
        </div>
        {/* Main */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="mx-4 order-2 md:order-1 flex flex-col gap-6 justify-center">
            <h1 className="text-5xl font-bold">Hi, I{"'"}m Aditya</h1>
            <h3 className="text-2xl text-gray-500">
              I am <span ref={iamRef}></span> Developer
            </h3>
            <p className="">
              Open-Source enthusiast and self learner, believes in the power of
              community.
            </p>
            <button className="bg-violet-500 text-white rounded-lg self-start">
              <a href="#contact" className="flex items-center p-4">
                Contact Me
                <Icon icon="uil:message" className="" />
              </a>
            </button>
          </div>
          <img
            src="./assets/img/me.jpg"
            alt="Aditya Patil"
            className="rounded-full object-cover p-[15%] order-1 md:order-2"
          />
        </div>
      </div>
      <div className="mt-[4rem]">
        <a href="#about" className="flex items-center px-4 py-2">
          <Icon icon="uil:mouse-alt" className="text-violet-500 text-3xl" />
          <span className="">Scroll Down</span>
          <Icon icon="uil:arrow-down" className="text-violet-500 text-3xl" />
        </a>
      </div>
    </section>
  )
}
export default Splash
