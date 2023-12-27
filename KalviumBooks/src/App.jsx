import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';
import RegisterPage from './pages/Register';
import Navbar from './component/Navbar';

const App = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

// Switch and Route code from Bard
  return (
    <Router basename="/KalviumBooks-CA-5/">
      <div>
        <Navbar searchInput={searchInput} handleInputChange={handleInputChange} />
        <Switch>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/">
            <HomePage searchInput={searchInput} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
