import Link from "next/link"
import { Icon } from "@iconify/react"

interface NavBarProps {
  title: string
  links: {
    name: string
    href: string
  }[]
}

const NavBar = (props: NavBarProps) => {
  return (
    <nav className="py-6 px-4 md:px-8 flex items-center w-full fixed top-0 bg-white">
      {/* Title */}
      <Link href="/">
        <a className="hover:text-violet-500">{props.title}</a>
      </Link>

      {/* Menu */}
      <div className="ml-auto">
        <ul className="flex">
          {props.links.map((link, index) => (
            <li key={index} className="mx-2">
              <Link href={link.href}>
                <a className="hover:text-violet-500">{link.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Theme toggle */}
      <button className="ml-8 p-2 text-lg hover:text-violet-500">
        <Icon icon="bi:moon" />
      </button>
    </nav>
  )
}
export default NavBar
