import React from 'react';
import { Link } from 'react-router-dom';
import Carregamento from '../pages/Carregamento';
import * as userAPI from '../services/userAPI';

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      carregar: false,
      user: '',
    };
  }

  componentDidMount() {
    this.getNameUser();
  }

  getNameUser = async () => {
    this.setState({ carregar: true });
    await userAPI.getUser().then((data) => {
      const { name } = data;
      this.setState({ user: name });
    });
    this.setState({ carregar: false });
  }

  render() {
    const { user, carregar } = this.state;
    return (
      <header data-testid="header-component">
        <div>
          <section>
            <Link to="/search" data-testid="link-to-search">Pesquisa</Link>
            <Link to="/favorites" data-testid="link-to-favorites">Favoritos</Link>
            <Link to="/profile" data-testid="link-to-profile">perfil</Link>
          </section>
          {carregar ? <Carregamento /> : <p data-testid="header-user-name">{ user }</p> }
        </div>
      </header>
    );
  }
}
