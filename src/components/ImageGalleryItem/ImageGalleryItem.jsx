import PropTypes from 'prop-types';
import { ImageGalleryItemStyled, ImageStyled } from './ImageGalleryItem.styled';

export default function ImageGalleryItem(props) {
  const {
    item: { webformatURL, tags, largeImageURL },
  } = props;
  return (
    <ImageGalleryItemStyled>
      <ImageStyled
        src={webformatURL}
        alt={tags}
        data-largeimageurl={largeImageURL}
      />
    </ImageGalleryItemStyled>
  );
}

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};
