
const Button = (className, href, onClick, children, px, white) => {
  const renderButton = () => (
    <Button>
        <span>{children}</span>
        {ButtonSvg(white)}
    </Button>
  )
}

export default Button
