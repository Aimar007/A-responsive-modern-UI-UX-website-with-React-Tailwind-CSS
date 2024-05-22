import ButtonSvg from "../assets/svg/ButtonSvg"

const Button = (className, href, onClick, children, px, white) => {

  const classes = `button relative infline-flex itmes-center justify-center h-11 transition-colors hover:text-color-1 ${px || 'px-7'} ${white ? 'text-n-8': 'text-n-1'} `
  
  const renderButton = () => (
    <button className={classes}>
        <span>{children}</span>
        {ButtonSvg(white)}
    </button>
  )

  return renderButton()
}

export default Button
