

const Heading = ({className, title}) => {
  return (
    <div className="container relative z-2">
      {title && <h2 className="md:max-md">{title}</h2>}
    </div>
  )
}

export default Heading