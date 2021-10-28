import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      pesquisa: '',
      enableBu: true,
    };
  }

  handleChange = (event) => {
    const { value } = event.target;
    const N = 2;
    if (value.length >= N) {
      this.setState({ enableBu: false });
    } else {
      this.setState({ enableBu: true });
    }
    this.setState({ pesquisa: value });
  }

  render() {
    const { enableBu } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <section>
          <input
            type="text"
            onChange={ this.handleChange }
            data-testid="search-artist-input"
          />
          <button
            type="submit"
            data-testid="search-artist-button"
            disabled={ enableBu }
          >
            Pesquisar
          </button>
        </section>
      </div>
    );
  }
}
export default Search;
