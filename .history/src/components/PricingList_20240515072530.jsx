import { pricing } from "../constants"


const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((itme) => (
        <div id={itme.id} className="w-[19rem] max-lg:w-full h-full px-6 bg-n-4 border border-n-6 rounded-[2rem] lg:w-auto even:py-4 odd:py-8">
          <h4>{ itme.title }</h4>
        </div>
      ))}
    </div>
  )
}

export default PricingList