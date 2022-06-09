import './App.css';
import Header from'./components/header';
import Board from './components/board';
import Rule from './components/rule'
import Main from './components/main'
import React from 'react';
import {Route, Routes, Link} from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/game" element={<Board/>}/>
        <Route path="/rule" element={<Rule/>}/>
      </Routes>
      
    </>
    
  );
}

export default App;
