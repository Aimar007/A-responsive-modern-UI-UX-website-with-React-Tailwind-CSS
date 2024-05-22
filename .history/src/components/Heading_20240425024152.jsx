

const Heading = ({className, title}) => {
  return (
    <div className={`${className} max-w-[50rem]`}>
      {title && <h2 className="h2">{title}</h2>}
    </div>
  )
}

export default Heading