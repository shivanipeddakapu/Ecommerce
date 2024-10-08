import React from 'react';
import "./App.css";
import {Link} from "react-router-dom";
export default class Part1nav extends React.Component{
    render(){
        return(
            <>
            <nav>
                <ul> 
                <h1 id="h1">FashionWorld</h1>
                   <Link to="reg1"><li id="regb1"><button>Registeration Form</button></li></Link>
                   <Link to="log1"><li id="log1"><button>Login Form</button></li></Link>
                </ul>
            </nav>
            </>
        )
    }
}