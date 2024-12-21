import { Route, Routes } from "react-router-dom";
import Login from "./Pages/login";
import Register from "./Pages/register";

export const GenericRoutes = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    )
}