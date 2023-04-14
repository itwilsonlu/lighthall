import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const storedCount = localStorage.getItem('count');
    if (storedCount) {
      setCount(parseInt(storedCount));
    }
  }, []);

  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem('count', newCount.toString());
  };

  return (
    <div className="App">
      <h1>Chasing the Clicks</h1>
      <p>Click the button to increase the count:</p>
      <button onClick={handleClick}>Click me</button>
      <p className="count">You clicked: {count} time(s)</p>
    </div>
  );
}

export default App;
