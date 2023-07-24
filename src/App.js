import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";

import Updated from "./Pages/Update";
import { Viewall } from "./Pages/viewall";
import Thanku from "./Pages/Thanku";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Layout />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="login" element={<Login />} />
                    <Route path="viewall" element={<Viewall/>} />
                    <Route path="updated" element={<Updated/>} />
                    <Route path="Thanku" element={<Thanku/>} />
                </Route>
                
            </Routes>
        </BrowserRouter>
    )
}