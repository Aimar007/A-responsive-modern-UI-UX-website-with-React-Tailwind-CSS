import { service1, service2, service3, check } from "../assets"
import { brainwaveServices, brainwaveServicesIcons } from "../constants"
import { PhotoChatMessage, Gradient, VideoBar, VideoChatMessage } from "./design/Services"
import Generating from "./Generating"
import Heading from "./Heading"
import Section from "./Section"

const Services = () => {
  return (
    <Section id={"how-to-use"}>
      <div className="container">
        <Heading title="Generative AI made for creators." text="Brainwave unlocks the potential of AI-powered applications" />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              < img
                className="w-full h-full object-cover md:object-right"
                width={800}
                height={730}
                alt="Smartest AI"
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h-4 mb-4">Smartest AI</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Brainwave unlocks the potencial of AI-powered applications.
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    < img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating className="absolute left-4 right-4 bottom-4 border  border-n-1/10 lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h-4 mb-4">Photo editing</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                Automatically enhance your photos using our AI app&apos;s photo editing feature. Try it now!
                </p>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Video generation</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  The world's most powerful AI photo and video art generation engine.  What will you create?
                </p>

                <ul>
                  <li className="mb-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Check className="text-n-1" />
                      </div>
                      <div className="ml-4">
                        <h5 className="h5">
                          Video generation
                        </h5>
                        <p className="body-2 text-n-3"></p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Services