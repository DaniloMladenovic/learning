import './Button.css';
import { useMemo } from 'react';

// size moze da bude: 'small', 'medium' i 'large'
// color moze da bude: 'primary' i 'secondary'
// variant moze da bude: 'text', 'contained', 'outlined'

// type ButtonProps = {
//   variant: "text" | "contained",
//   color: ,
//   size: ,
//   onClick
// }

const Button = (props) => {
  const {
    variant = 'contained',
    color = 'primary',
    size = 'medium',
    onClick,
    ...rest
  } = props;

  const classes = useMemo(
    () =>
      `my-button my-button--${variant} my-button--${size} my-button--${color}`,
    [variant, size, color]
  );

  return (
    <button className={classes} onClick={onClick}>
      {variant}
    </button>
  );
};

export default Button;
