import { tab } from '@testing-library/user-event/dist/tab';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Table from './components/Table';
import TableApp from './components/TableApp';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const toggleDarkMode = () => {
    if (mode === 'light') {
        setMode('dark')
        document.body.style.background="#5a5858";
    } else {
        setMode('light');
        document.body.style.background="white";
    }
}
  return (
    <>
      <Router>
        <Navbar mode={mode} toggleDarkMode={toggleDarkMode}/>
        <Switch>
        <Route path="/about">
            <About />
          </Route>
          <Route path="/table">
            <TableApp />
          </Route>
          <Route path="/">
            <TextForm heading="Enter Your Text to Analyze Below"></TextForm>
          </Route>
        </Switch>
      </Router>
    </>

  );
}

export default App;
