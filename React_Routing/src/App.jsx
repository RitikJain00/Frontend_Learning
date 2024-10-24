import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppNavigate from "./components/AppNavigate.jsx";

const Dashboard = React.lazy(() => import("./components/Dashboard.jsx"));
const LandingPage = React.lazy(() => import("./components/LandingPage.jsx")); // lazy loading
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppNavigate />
        <Routes>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={"loading..."}>
                <Dashboard />{" "}
              </Suspense>
            }
          />
          <Route
            path="/"
            element={
              <Suspense falling={"loading..."}>
                {" "}
                <LandingPage />{" "}
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
