import ButtonSvg from "./assets/svg/ButtonSvg"

const Button = (className, href, onClick, children, px, white) => {
  const renderButton = () => (
    <Button>
        <span>{children}</span>
        {ButtonSvg(white)}
    </Button>
  )

  return renderButton()
}

export default Button
