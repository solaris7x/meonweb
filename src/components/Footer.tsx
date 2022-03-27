import Link from "next/link"
import { Icon } from "@iconify/react"

interface FooterProps {
  name: string
  subtitle: string
  links: {
    link: string
    title: string
  }[]
  social: {
    link: string
    icon: string
  }[]
}

const Footer = (props: FooterProps) => {
  return (
    <footer className="bg-violet-500 text-white py-12 px-2 mt-10">
      <div className="grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 gap-4 mx-[15%]">
        {/* Footer Name */}
        <div>
          <h1 className="text-4xl font-bold">{props.name}</h1>
          <div className="my-4">{props.subtitle}</div>
        </div>

        {/* Footer Links */}
        <ul className="flex gap-4 justify-center">
          {props.links.map((link, index) => (
            <li key={index}>
              <a href={link.link} className="">
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Footer Social */}
        <div className="flex gap-4 justify-end text-xl">
          {props.social.map((social, index) => (
            <Link key={index} href={social.link}>
              <a target="_blank" className="">
                <Icon icon={social.icon} className="" />
              </a>
            </Link>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <p className="my-4 text-center text-gray-700">
        &#169; {props.name}. All rights reserved
      </p>
    </footer>
  )
}
export default Footer
