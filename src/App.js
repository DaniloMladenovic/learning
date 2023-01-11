import './App.css';
import { useMemo, useState } from 'react';
import Button from './components/Button/Button';

const App = () => {
  const [buttonVariant, setButtonVariant] = useState('');

  const onVariantChangeHandler = (event) => {
    setButtonVariant(event.target.value);
  };

  return (
    <div>
      <label>Enter button variant</label>
      <input value={buttonVariant} onChange={onVariantChangeHandler} />
      <Button variant="text" />
      <Button variant="contained" />
      <Button variant="outlined" />
    </div>
  );
};

export default App;
