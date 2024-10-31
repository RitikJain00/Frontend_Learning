import { useState, useEffect } from "react";

const useDebaunced = (value, timer) => {
  const [Debval, setDebval] = useState("");

  useEffect(() => {
    const interval = setTimeout(() => {
      setDebval(value);
    }, timer);

    return () => {
      clearInterval(interval);
    };
  }, [value]);

  return Debval;
};

const Debaunce = () => {
  const [input, setInput] = useState("");
  const DebauncedValue = useDebaunced(input, 500);
  return (
    <>
      <div>Debaunced Value is {DebauncedValue}</div>
      <input
        type="text"
        placeholder="Enter Text"
        onChange={(e) => setInput(e.target.value)}
      />
      ;
    </>
  );
};

export default Debaunce;
