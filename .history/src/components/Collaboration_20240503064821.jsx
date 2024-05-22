import { collabContent } from "../constants"
import Section from "./Section"

const Collaboration = () => {
  return (
    <Section crosses >
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">
            AI Chat App for seamless collaboration
          </h2>
          <ul>
            {collabContent}
          </ul>
        </div>
      </div>
    </Section>
  )
}

export default Collaboration