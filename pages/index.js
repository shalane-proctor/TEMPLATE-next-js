import { useState } from 'react';

function Home() {
  const [value, setValue] = useState(0);

  return (
    <>
      <h1>Counter Tile</h1>
      <h2>{value}</h2>
      <button type="button" onClick={() => setValue((prevState) => prevState + 1)}>
        Increment
      </button>
      <button type="button" onClick={() => setValue((prevState) => prevState - 1)}>
        Decrement
      </button>
      <button type="button" onClick={() => setValue(0)}>
        Reset
      </button>
    </>
  );
}

export default Home;
