import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryStyled } from './ImageGallery.styled';

export default function ImageGallery(props) {
  const { onClick, data } = props;

  return (
    <GalleryStyled onClick={onClick}>
      {data.length > 0 &&
        data.map(item => {
          return <ImageGalleryItem key={item.id} item={item} />;
        })}
    </GalleryStyled>
  );
}

ImageGallery.propTypes = {
  isModalOpen: PropTypes.func.isRequired,
  setDataForModal: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
};
