
import { grid } from '../assets'
import { roadmap } from '../constants'
import Heading from './Heading'
import Section from './Section'

const Roadmap = () => {
  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className='container md:pb-10'>
        < Heading
          tag="Ready to get started"
          title="What we're working on"
        />

        <div className='relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]'>
          {roadmap.map((item) => {
            const status = item.status === 'done' ? 'Done' : 'In progress'
            
            return (
              <div key={item.id}>
                <div>
                  <div>
                    < img
                      src={grid}
                      className="w-full"
                      width={550}
                      height={550}
                      alt="Grid"
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

export default Roadmap