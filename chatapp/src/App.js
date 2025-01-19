import "./App.css";
//react provide suspense and lazy components as the loader
import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardLayout from "./Dashboard/DashboardLayout";
import Settings from "./Components/Settings";
import Login from "./Dashboard/Auth/Login";
import MainLayout from "./Dashboard/MainLayout";
import Register from "./Dashboard/Auth/Register";
import Layout from "./Dashboard/Layout";
import GroupPage from "./Dashboard/GroupPage";
import Profile from "./Components/Profile";
import Error from "./Dashboard/Error";
//Dynamic Loading of component can be done using suspense and lazy
// const Cat=lazy(()=>import('./Components/Cat'))
/* <Suspense fallback="Loading..."> 
<Cat/>
</Suspense> */

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Define routes with the shared Sidebar */}
            <Route index element={<DashboardLayout />} /> {/* Default route */}
            <Route path="settings" element={<Settings />} />{" "}
            {/* Settings route*/}
            <Route path="group" element={<GroupPage />} /> {/* Group route */}
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/auth" element={<MainLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
