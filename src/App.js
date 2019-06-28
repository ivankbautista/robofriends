import React, { Component } from 'react';
import CardList from './CardList';
import SearchBoxx from './SearchBoxx';
import { robots } from './robots';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
            <h1>RoboFriends</h1>
            <SearchBoxx searchChange={this.onSearchChange}/>
            <CardList robots={filteredRobots}/>  
            </div>
        );
    }
}

export default App;