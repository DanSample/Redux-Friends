import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/login" component={LoginForm} />
      </div>
    </Router>
  );
}

export default App;
