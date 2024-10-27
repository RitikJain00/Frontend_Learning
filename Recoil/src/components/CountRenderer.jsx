import { useRecoilValue } from "recoil";
import { countAtom } from "../store/atoms/count";
import { evenSelector } from "../store/atoms/count";

const CountRendered = () => {
  // only this componenet will rerender
  const count = useRecoilValue(countAtom);
  const isEven = useRecoilValue(evenSelector);
  return (
    <>
      {count}
      <br />
      {isEven ? "It is Even" : null}
    </>
  );
};

export default CountRendered;
