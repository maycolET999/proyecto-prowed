import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import TopNavbar from "./components/TopNavbar";
import SideNavbar from "./components/SideNavbar";
import CardItems from "./components/CardItems";
import Login from "./pages/login";

function App(){

    return(
        <Router>
            <Routes>
            <Route path="/login" element={<Login />} />
                <Route path="/*" element={
                    <div>
                        <TopNavbar />
                        <SideNavbar />
                        <CardItems />
                    </div>
                }>
                </Route>
            </Routes>
        </Router>

    );

}
export default App;