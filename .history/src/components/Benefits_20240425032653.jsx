import Section from './Section'
import Heading from './Heading'
import { benefits } from '../constants'

const Benefits = () => {
  return (
    <Section id="features">
      <div className='container relative z-2'>
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Brainwave"
        />

        <div className='flex-wrap'>
          {benefits.map((item) => (
            <div key={item.id}>
              <div>
                <h5>{item.title}</h5>
              <div/>
            <div/>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Benefits