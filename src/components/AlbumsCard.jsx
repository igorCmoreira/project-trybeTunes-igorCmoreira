import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class AlbumsCard extends React.Component {
  render() {
    const { list } = this.props;
    return (
      <div>
        <section>
          {list.map((data) => (
            <div key={ data.collectionId }>
              <Link
                to={ `/album/${data.collectionId}` }
                data-testid={ `link-to-album-${data.collectionId}` }
              >
                <img src={ data.artworkUrl100 } alt="" />
                <h2>{ data.collectionName }</h2>
                <h4>{ data.artistName }</h4>
              </Link>
            </div>
          )) }
        </section>

      </div>
    );
  }
}

AlbumsCard.propTypes = {
  list: PropTypes.array,
  artist: PropTypes.string,
}.isRequired;
