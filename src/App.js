import React from 'react';
import logo from './logo.svg';
import './App.css';
import { UsApi } from './services/UsApi';


function App() {

  UsApi();
  {/*<UsApi/>*/}

  return (
    <div className="App">
      Stuff
    </div>
  );
}

export default App;
