import PropTypes from 'prop-types';
import { ImageGalleryItemStyled, ImageStyled } from './ImageGalleryItem.styled';

export default function ImageGalleryItem(props) {
  const {
    item: { webformatURL, tags, largeImageURL },
    onClick,
  } = props;
  return (
    <ImageGalleryItemStyled>
      <ImageStyled
        src={webformatURL}
        alt={tags}
        onClick={() => onClick(largeImageURL, tags)}
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
  onClick: PropTypes.func.isRequired,
};
