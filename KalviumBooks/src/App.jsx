import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import { useState } from 'react';

const App = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (query) => {
    setSearchInput(query);
  };

  return (
    <Router>
      <Navbar onSearch={handleSearch} />
      <Switch>
        <Route path="/" exact>
          <Home searchInput={searchInput} />
        </Route>
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
};

export default App;

