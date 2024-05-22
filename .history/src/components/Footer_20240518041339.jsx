import { socials } from "../constants"
import Section from "./Section"


const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>
        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
            >
              <img
                src={item.iconUrl}
                alt={item.title}
                width={16}
                height={16}
                className="w-6 h-6"
              />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export default Footer