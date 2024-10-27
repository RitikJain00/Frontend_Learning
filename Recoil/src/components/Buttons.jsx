import { useSetRecoilState } from "recoil";
import { countAtom } from "../store/atoms/count";

const Buttons = () => {
  const setCount = useSetRecoilState(countAtom);
  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>Increasing</button>
      <button onClick={() => setCount((count) => count - 1)}>Decreasing</button>
    </>
  );
};

export default Buttons;
