import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      musics: [],
    };
  }

  componentDidMount() {
    this.getMusic();
  }

  getMusic = async () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const music = await getMusics(id);
    this.setState({
      musics: music,
      artistName: music[0].artistName,
      collectionName: music[0].collectionName,
    });
  }

  render() {
    const { musics, artistName, collectionName } = this.state;
    const correctStart = musics.slice(1);
    return (
      <div data-testid="page-album">
        <Header />
        <section>
          <h2 data-testid="artist-name">{artistName}</h2>
          <h3 data-testid="album-name">{collectionName}</h3>
        </section>
        <section>
          {correctStart.map((data, i) => (
            <div key={ i }>
              <MusicCard
                music={ data.previewUrl }
                trackName={ data.trackName }
                trackId={ data.trackId }
                elemento={ data }
              />
            </div>
          ))}
        </section>
      </div>
    );
  }
}

Album.propTypes = {
  musics: PropTypes.array,
}.isRequired;

export default Album;
