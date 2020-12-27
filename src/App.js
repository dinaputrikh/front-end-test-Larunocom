import React, { useEffect, useState } from 'react';
import './App.css';
import { Tabs, Tab} from 'react-bootstrap';
import Search from './Search';
import Favorite from './Favorite';

function App () {
  return (
    <div div className="container" >
    <Tabs defaultActiveKey="search" id="uncontrolled-tab-example">
      <Tab eventKey="search" title="Search">
        <Search/>
      </Tab>
      <Tab eventKey="favorite" title="Favorite">
        <Favorite/>
      </Tab>
    </Tabs>
    </div>
  )
}

export default App;
