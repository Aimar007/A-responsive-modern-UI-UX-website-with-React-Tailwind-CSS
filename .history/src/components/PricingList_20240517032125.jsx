import { check } from "../assets"
import { pricing } from "../constants"
import Button from "./Button"

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-4 odd:py-8"
        >  
          <h4 className="h4 mb-4">{item.title}</h4>
          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">{item.description}</p>

          <div className="flex ">
            {item.price && (
              <>
                <div>$</div>
                <div>{item.price}</div>
              </>
            )}
          </div>

          <Button           
            className="w-full mb-6"
            href={item.pricing ? "/pricing" : "mailto:contact@gmail.com"}
            white={!! item.price}
          >
            {item.price ? "Get Started" : "Contact Us"}
          </Button>

          <ul>
            {item.features.map((feature, index) => (
              <li key={index}>
                <img src={check} width={24} height={24} alt="Check" />
                <p className="text-sm">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default PricingList