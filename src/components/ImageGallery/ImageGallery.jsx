import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryStyled } from './ImageGallery.styled';

export default function ImageGallery(props) {
  const { onClick, data } = props;

  return (
    <GalleryStyled>
      {data.length > 0 &&
        data.map(item => {
          return (
            <ImageGalleryItem key={item.id} item={item} onClick={onClick} />
          );
        })}
    </GalleryStyled>
  );
}

ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
};
