import brackets from "../assets/svg/Brackets"

const Tagline = ({ className, chidren }) => {
  return (
    <div>
      {brackets("left")}
      {brackets("right")}
    </div>
  )
}

export default Tagline