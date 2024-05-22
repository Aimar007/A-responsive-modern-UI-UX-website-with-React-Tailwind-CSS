import brackets from "../assets/svg/Brackets"

const Tagline = ({ className, chidren }) => {
  return (
    <div className={`tagline flex`}>
      {brackets("left")}
      <div>{ chidren}</div>
      {brackets("right")}
    </div>
  )
}

export default Tagline