import style from './Button.module.css';

const Button = ({
  onClick,
  children,
  className = style.button,
  name = 'button',
}) => {
  return (
    <button
      type="button"
      onClick={() => onClick()}
      className={className}
      name={name}
    >
      {children}
    </button>
  );
};

export default Button;
