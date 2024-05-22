import { pricing } from "../constants"


const PricingList = () => {
  return (
    <div>
      {pricing.map((itme) => (
        <div>
          <h4>{ pricing }</h4>
        </div>
      ))}
    </div>
  )
}

export default PricingList