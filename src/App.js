import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const MainLayout = lazy(() => import('./layouts/MainLayout'));
const DashboardLayout = lazy(() => import('./layouts/DashboardLayout'));

function App(props) {
  return (
    <React.Suspense fallback={(<></>)}>
      <Routes>
        <Route path="//*" name="Home" element={(<MainLayout {...props} />)} />
        <Route path="/dashboard/*" name="Dashboard" element={(<DashboardLayout {...props} />)} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
