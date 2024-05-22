import { pricing } from "../constants"


const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-3 border border-n-8 rounded-[2rem] lg:w-auto even:py-4 odd:py-8"
        >  
          <h4 className="h4 mb-4">{ item.title }</h4>
        </div>
      ))}
    </div>
  )
}

export default PricingList