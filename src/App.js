import './App.css';
// import { useMemo, useState } from 'react';
import Button from './components/Button/Button';

const App = () => {
  // const [buttonVariant, setButtonVariant] = useState('');

  // const onVariantChangeHandler = (event) => {
  //   setButtonVariant(event.target.value);
  // };

  const onClickHandler = () => {
    console.log('Clicked');
  };

  return (
    <div className="container-div">
      {/* <label>Enter button variant</label>
      <input value={buttonVariant} onChange={onVariantChangeHandler} /> */}

      <div className="buttons-div">
        <Button variant="text" size="large" />
        <Button
          variant="contained"
          color="secondary"
          onClick={onClickHandler}
        />
        <Button variant="outlined" size="small" />
      </div>
    </div>
  );
};

export default App;
