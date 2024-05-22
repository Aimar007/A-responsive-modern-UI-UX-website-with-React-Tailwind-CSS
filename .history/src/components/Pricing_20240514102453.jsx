import { smallSphere, stars } from "../assets"
import Section from "./Section"

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />

          <div>
            <img
              src={stars}
              className="absolute top-0 left-0 z-0"
              width={500}
              height={500}
              alt="Sphere"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Pricing