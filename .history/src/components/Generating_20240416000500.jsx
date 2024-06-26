import { loading } from "../assets"

const Generating = () => {
  return (
    <div className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 `}>
      <img className="w-5 h-5 mr-4" src={loading} alt="Loading"/>
      AI is generating
      </div>
  )
}

export default Generating