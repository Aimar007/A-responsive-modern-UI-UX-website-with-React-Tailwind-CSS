import { curve } from "../assets"
import Section from "./Section"

const Hero = () => {
  return (
    <section
      className="pt-[12rem] -mt-[5.25]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero" 
    >
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem]">
          <h1 className="h1 mb-6">
            Explore the Possibilites of AI chatting with BrainwaveCurve
            <span className="inline-block relative">
              Brainwave {""}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
              />
            </span>
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Hero