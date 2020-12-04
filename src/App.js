import React, { useState } from 'react';

const App = () =>  {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const increment2 = () => setCount(previousCount => previousCount + 1);
  const decrement2 = () => setCount(previousCount => previousCount - 1);
  const triple3 = () => setCount(value => {
    if(value % 3 === 0){
      return value / 3;
    } else {
      return value
    }
  });

  const reset = () => setCount(0);
  const double = () => setCount(count * 2);
  const triple = () => setCount(count % 3 === 0 ? count / 3 : count);
  const triple2 = () => setCount(value => value % 3 === 0 ? value / 3 : value);

  return (
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={reset}>reset</button>
        <button onClick={double}>×2</button>
        <button onClick={triple}>/3</button>
        <button onClick={triple2}>/3</button>
        <button onClick={triple3}>/3</button>
      </div>
    </>
  );
}

export default App;
