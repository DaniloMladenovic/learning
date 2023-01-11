import './Button.css';
import { useMemo } from 'react';

const Button = ({ variant = 'contained' }) => {
  const onClickHandler = () => {
    console.log('Clicked');
  };

  const classes = useMemo(() => `my-button my-button--${variant}`, [variant]);

  return (
    <button className={classes} onClick={onClickHandler}>
      {variant}
    </button>
  );
};

export default Button;
