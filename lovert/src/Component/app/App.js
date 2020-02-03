import React, { Component } from "react";

import SearchBox from "../../Component/app/searchBox";
import Cardlist from "../../Component/card/Cardlist";
import Scroll from "../../Component/Scroll";
import "./app.css"




class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ""
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response =>{
           return response.json();
        })
        .then(users => {
           this.setState({ robots: users }); 
        })
        
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })

    }



    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

        return (
            <div className="tc bg-blue">
                <h1 className="f1">ROBOFRIENDS</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                   <Cardlist robots={filteredRobots} /> 
                </Scroll>
                
            </div>

        );
    }



}
export default App;