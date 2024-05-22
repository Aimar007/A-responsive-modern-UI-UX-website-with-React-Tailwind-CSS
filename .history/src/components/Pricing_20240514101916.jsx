import { smallSphere } from "../assets"
import Section from "./Section"

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center  lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
        </div>
      </div>
    </Section>
  )
}

export default Pricing