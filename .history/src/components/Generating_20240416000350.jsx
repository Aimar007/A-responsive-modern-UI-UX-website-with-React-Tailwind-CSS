import { loading } from "../assets"

const Generating = () => {
  return (
    <div className={`flex items-center`}>
      <img className="w-5 h-5 mr-4" src={loading} alt="Loading"/>
      AI is generating
      </div>
  )
}

export default Generating