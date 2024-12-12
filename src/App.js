import "./App.css"
//react provide suspense and lazy components as the loader
import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import DashboardLayout from "./Dashboard/DashboardLayout";
import Settings from "./Components/Settings";
import SideBar from "./Components/Sidebar";
import Layout from "./Dashboard/Layout"
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
          <Route path="settings" element={<Settings />} /> {/* Settings route */}
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
