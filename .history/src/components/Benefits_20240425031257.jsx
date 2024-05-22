import Section from './Section'
import Heading from './Heading'
import { benefits } from '../constants'

const Benifits = () => {
  return (
    <Section id="features">
      <div className='container relative z-2'>
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Brainwave"
        />

        <div>
          {benefits}
        </div>
      </div>
    </Section>
  )
}

export default Benifits