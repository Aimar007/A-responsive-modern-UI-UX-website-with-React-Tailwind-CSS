import { pricing } from "../constants"


const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((itme) => (
        <div id={itme.id} className="w-[19rem]">
          <h4>{ itme.title }</h4>
        </div>
      ))}
    </div>
  )
}

export default PricingList