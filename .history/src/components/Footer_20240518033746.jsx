import { socials } from "../constants"
import Section from "./Section"


const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>
        <ul>
          {socials.map((item) => (
            <a>
              <img />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export default Footer