import React, { Component } from "react";
import App from "./App";
import {robots} from "./Component/robots/robots";
import searchBox from "./searchBox";
import { render } from "react-dom";



class App extends Component{
    constructor() {
        super()
        this.state ={
            robots:robots,
            serchfield: ""
        }
    }

onSearchange(event){
    console.log(event.target.value.);
}

    render () {
        return(
        <div className="tc">
         <h1>Rbofriends</h1>
         <SearchBox searchChange={this.onSearchange}/>
        <Cardlist robots={this.state.robots}/>   
        </div>
        
    );
    }
    
}
export default App;