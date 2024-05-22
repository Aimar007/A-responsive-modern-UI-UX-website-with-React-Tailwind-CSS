import { service1, service2, service3, check } from "../assets"
import Heading from "./Heading"
import Section from "./Section"

const Services = () => {
  return (
    <Section id={"how-to-use"}>
      <div className="container">
        <Heading title="Generative AI made for creators." text="Brainwave unlocks the potential of AI-powered applications" />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full ">
              < img
                className="w-full h-full object-cover md:object-right"
                width={800}
                height={730}
                alt="Smartest AI"
                src={service1}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Services