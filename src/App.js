import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navbar from './Navbar';
import HomePage from './HomePage';
import CataloguePage from './CataloguePage';
import FavoritesPage from './FavoritesPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/cataloguepage" component={CataloguePage} />
          <Route path="/favoritespage" component={FavoritesPage} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;

