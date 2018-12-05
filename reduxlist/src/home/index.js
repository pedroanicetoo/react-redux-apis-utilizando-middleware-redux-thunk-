import React from 'react';

import  './Home.css';
import NewList from '../home/NewList';
import List from '../home/List';
const Home = (props) => ( 

  <div className="page-container">
    <NewList/>   
    <List/>
  </div>
);

export default Home;