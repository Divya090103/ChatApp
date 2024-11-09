import "./App.css"
//react provide suspense and lazy components as the loader
import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import DashboardLayout from "./Dashboard/DashboardLayout";
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
    <Route path="/" element={ <> <DashboardLayout/>


    </>}/>
 
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
