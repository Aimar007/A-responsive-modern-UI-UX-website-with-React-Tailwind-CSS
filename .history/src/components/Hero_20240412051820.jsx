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
          <h1 className="h2">
            Explore the Possibilites of AI chatting with BrainwaveCurve
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Hero