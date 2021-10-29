import React from 'react';
import PropTypes from 'prop-types';
import * as favoriteSongsAPI from '../services/favoriteSongsAPI';
import Carregamento from '../pages/Carregamento';

export default class MusicCard extends React.Component {
  constructor() {
    super();
    this.state = {
      carregar: false,
    };
  }

  handleClick = async () => {
    const { elemento } = this.props;
    this.setState({ carregar: true });
    await favoriteSongsAPI.addSong(elemento);
    this.setState({ carregar: false });
  }

  render() {
    const { music, trackName, trackId } = this.props;
    const { carregar } = this.state;
    return (
      <section>
        <h3>{ trackName }</h3>
        <audio data-testid="audio-component" src={ music } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
          .
        </audio>
        <label htmlFor="favorite">
          Favorita
          <input
            type="checkbox"
            name="favorite"
            data-testid={ `checkbox-music-${trackId}` }
            onClick={ this.handleClick }
          />
        </label>
        { carregar ? <Carregamento /> : ''}
      </section>
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string,
  previewUrl: PropTypes.string,
}.isRequired;
