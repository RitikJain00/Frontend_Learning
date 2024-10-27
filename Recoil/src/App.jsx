import Count from "./components/Count";

import "./App.css";
import { Topbar } from "./components/Topbar";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <Count></Count>
        <br />
        <Topbar></Topbar>
      </RecoilRoot>
    </>
  );
}

export default App;
