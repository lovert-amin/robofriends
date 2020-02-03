import React, { Component } from "react";

import SearchBox from "../components/searchBox";
import Cardlist from "../components/Cardlist";
import Scroll from "../components/Scroll";
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
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        if (!robots.length) {
            return <h1>Loading</h1>
        } else {
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



}
export default App;