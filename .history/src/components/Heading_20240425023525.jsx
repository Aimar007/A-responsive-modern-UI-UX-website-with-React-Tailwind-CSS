

const Heading = ({className, title}) => {
  return (
    <div className="container relative">
      {title && <h2 className="h2">{title}</h2>}
    </div>
  )
}

export default Heading