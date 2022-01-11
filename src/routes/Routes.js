import { Routes, Route,BrowserRouter, } from "react-router-dom";
import Home from "../views/Home/Home";

export default function Routes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}