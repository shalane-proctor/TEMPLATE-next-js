import { useState } from 'react';
import PropTypes from 'prop-types';

const Counter = ({ counterTitle }) => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue((prevState) => prevState + 1);
  };

  return (
    <>
      <h1>{counterTitle}</h1>
      <h2>{value}</h2>
      <button type="button" onClick={handleClick}>
        Increment
      </button>
      <button type="button" disabled={!value} onClick={() => setValue((prevState) => prevState - 1)}>
        Decrement
      </button>
      <button type="button" onClick={() => setValue(0)}>
        Reset
      </button>
    </>
  );
};

Counter.propTypes = {
  counterTitle: PropTypes.string,
};

Counter.defaultProps = {
  counterTitle: 'Counter Title',
};

export default Counter;
