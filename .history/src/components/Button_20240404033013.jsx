import ButtonSvg from "../assets/svg/ButtonSvg"

const Button = (className, href, onClick, children, px, white) => {

  const classes = `button relative infline-flex itmes-center justify-center `
  
  const renderButton = () => (
    <button className={classes}>
        <span>{children}</span>
        {ButtonSvg(white)}
    </button>
  )

  return renderButton()
}

export default Button
