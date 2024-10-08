import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./Components/Home"
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Error from "./Pages/Error"
export default class Router extends React.Component{
    render(){
        return(
            <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/log1" element={<Login/>}></Route>
            <Route path="/reg1" element={<Register/>}></Route>
            <Route path="*" element={<Error/>}></Route>
           </Routes>
           </BrowserRouter>
        )
    }
}