import ButtonSvg from "../assets/svg/ButtonSvg";

export const Button = (className, href, onClick, children, px, white) => {

  const classes = `button relative infline-flex itmes-center justify-center h-11 transition-colors hover:text-color-1 ${px || 'px-7'} ${white ? 'text-n-8' : 'text-n-1'} ${className || ''}`;

  const renderButton = () => (
    <button className={classes}>
      <span>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  return renderButton();
};
