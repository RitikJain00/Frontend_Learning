import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);

  const handleclick = () => {
    count += 1;
    setCount(count);
  };

  return (
    <center>
      <button onClick={handleclick}>Count: {count}</button>
    </center>
  );
}

export default App;
