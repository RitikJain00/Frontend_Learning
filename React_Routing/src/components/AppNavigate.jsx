// Used for Navigation

import { useNavigate } from "react-router-dom";

function AppNavigate() {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/dashboard")}>DashBoard</button>
      <button onClick={() => navigate("/")}>Landing</button>
    </>
  );
}

export default AppNavigate;
