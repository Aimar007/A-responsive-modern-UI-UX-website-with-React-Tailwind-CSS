

const Heading = ({className, title, text}) => {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20`}>
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className="text-gray-700">{text}</p>}
    </div>
  )
}

export default Heading