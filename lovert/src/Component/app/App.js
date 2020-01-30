import React, { Component } from "react";
import { robots } from "../../Component/robots/robots";
import SearchBox from "../../Component/app/searchBox";
import Cardlist from "../../Component/card/Cardlist";
import "./app.css"




class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ""
        }
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
                <Cardlist robots={filteredRobots} />
            </div>

        );
    }


   
}
export default App;