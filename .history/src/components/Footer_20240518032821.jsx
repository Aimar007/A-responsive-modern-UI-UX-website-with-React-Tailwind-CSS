import Section from "./Section"


const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between">
        <p>{new Date ().getFullYear()} All rights reserved.</p>
      </div>
    </Section>
  )
}

export default Footer