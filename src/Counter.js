import React, {useState} from 'react';

function Counter() {

  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(prevNumber => prevNumber + 1);
  }

  const onDecrease = () => {
    setNumber(prevNumber => prevNumber - 1);
  }

  return (
    <div>
      <h1>{number}</h1>
      {/* 함수를 호출하지 않고 함수 형태를 넘겨준다. */}
      <button onClick = {onIncrease}>+1</button>
      <button onClick = {onDecrease}>-1</button>
    </div>
  );
}

export default Counter;