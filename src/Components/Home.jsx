import React from "react";

import Part1nav from "./Part1nav.jsx"
import Part3api from "./Part3api.jsx";
import Part4footer from "./Part4footer.jsx"
import "./App.css"


export default class Home extends React.Component{
     render(){
        return(
            <>
          
            <Part1nav></Part1nav>
            <Part3api></Part3api>
            <Part4footer></Part4footer>
            
           
            </>
        )
     }
}


