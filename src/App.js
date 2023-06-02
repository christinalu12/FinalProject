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
          <Route path="/" element={<HomePage />} />
          <Route path="/CataloguePage" element={<CataloguePage />} />
          <Route path="/FavoritesPage" element={<FavoritesPage />} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;