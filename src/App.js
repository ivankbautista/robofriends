import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBoxx';
import { robots } from './robots';

const App = () => {
    return (
        <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox />
        <CardList robots={robots}/>  
        </div>
    );
}

export default App;