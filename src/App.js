import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Search from './pages/Search';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* <Route component={ NotFound } />
          => como o switch do react é comparavel com o do js colocarei,
           esta linha na utima posição */ }
          <Route exact path="/" component={ Login } />
          <Route path="/Album" component={ Album } />
          <Route path="/Favorites" component={ Favorites } />
          <Route path="/NotFound" component={ NotFound } />
          <Route exact path="/Profile" component={ Profile } />
          <Route exact path="/profile/edit" component={ ProfileEdit } />
          <Route path="/Search" component={ Search } />
          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
