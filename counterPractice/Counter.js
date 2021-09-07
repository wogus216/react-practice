import React, { useState } from 'react';

export default function Counter() {
  const [num, setNum] = useState(0);

  const onChange = (e) => {
    setNum(e.target.value);
  };

  const handlePlus = (e) => {
    console.log(`야호`);
    setNum(num + 1);
  };
  const handleMinus = (e) => {
    setNum(num - 1);
  };

  return (
    <div>
      <input onChange={onChange} value={num} />
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
    </div>
  );
}
