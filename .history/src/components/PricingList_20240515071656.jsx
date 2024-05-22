import { pricing } from "../constants"


const PricingList = () => {
  return (
    <div className="flex gap-[1rem]">
      {pricing.map((itme) => (
        <div>
          <h4>{ itme.title }</h4>
        </div>
      ))}
    </div>
  )
}

export default PricingList