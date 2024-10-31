import { useEffect, useState } from "react";

const useMousePointer = () => {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPointer({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return pointer;
};

const MousePointer = () => {
  const pointer = useMousePointer(); // custom hook

  return (
    <div>
      Your Mouse Pointer is at {pointer.x}, {pointer.y}
    </div>
  );
};

export default MousePointer;
