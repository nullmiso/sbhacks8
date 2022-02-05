import React from 'react';

import {Footer, Features, Header} from './containers';
import {Cta, Brand, Navbar} from './components';
import './App.css';

const App = () => {
  return (
    <div className = "App">
        <div className = "gradient__bg">
            <Navbar />
            <Header />
        </div>
        
    </div>
  )
};
 
export default App;
