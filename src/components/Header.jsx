import React from 'react';
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
          {carregar ? <Carregamento /> : <p data-testid="header-user-name">{ user }</p> }
        </div>
      </header>
    );
  }
}
