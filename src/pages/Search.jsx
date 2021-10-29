import React from 'react';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Carregamento from './Carregamento';
import AlbumsCard from '../components/AlbumsCard';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      pesquisa: '',
      enableBu: true,
      carregar: false,
      artistList: [],
      artist: '',
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
  };

  getResultsAlbuns = async () => {
    const { pesquisa } = this.state;
    this.setState({ carregar: true });
    const data = await searchAlbumsAPI(pesquisa);
    this.setState({
      pesquisa: '',
      artist: pesquisa,
      artistList: data,
      carregar: false,
    });
  };

  handleClick = (event) => {
    console.log(event.target);
  };

  render() {
    const { enableBu, carregar, artistList, artist, pesquisa } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <section>
          <input
            type="text"
            onChange={ this.handleChange }
            data-testid="search-artist-input"
            value={ pesquisa }
          />
          <button
            type="submit"
            data-testid="search-artist-button"
            disabled={ enableBu }
            onClick={ this.getResultsAlbuns }
          >
            Pesquisar
          </button>
        </section>
        <section>
          {carregar ? <Carregamento />
            : (
              <h2>
                Resultado de álbuns de:
                {' '}
                { artist }
              </h2>
            ) }
          {artistList.length === 0 ? (<p>Nenhum álbum foi encontrado</p>)
            : (<AlbumsCard list={ artistList } />)}

        </section>
      </div>
    );
  }
}
export default Search;
