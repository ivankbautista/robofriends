import React from 'react';
import CardList from './CardList';
import SearchBoxx from './SearchBoxx';
import { robots } from './robots';

const App = () => {
    return (
        <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBoxx />
        <CardList robots={robots}/>  
        </div>
    );
}

export default App;