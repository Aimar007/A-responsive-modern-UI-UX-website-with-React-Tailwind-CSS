import brackets from "../assets/svg/Brackets"

const Tagline = ({ className, chidren }) => {
  return (
    <div>
      {brackets("left")}
      <div>{ chidren}</div>
      {brackets("right")}
    </div>
  )
}

export default Tagline