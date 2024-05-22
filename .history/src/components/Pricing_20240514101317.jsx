import { smallSphere } from "../assets"
import Section from "./Section"

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
          />
        </div>
      </div>
    </Section>
  )
}

export default Pricing