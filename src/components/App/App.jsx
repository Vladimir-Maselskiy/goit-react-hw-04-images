import { useState } from 'react';
import { Bars } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Button from 'components/Button/Button';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Searchbar from '../Searchbar/Searchbar';
import { AppStyled } from './App.styled';
import Box from 'components/Box/Box';
import Modal from 'components/Modal/Modal';
import { fetchPixabay } from 'utils/fetchPixabay';
import { ImageStyled } from 'components/Modal/Modal.styled';
import { useEffect } from 'react';
import { useRef } from 'react';

export function App() {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loadMoreStatus, setLoadMoreStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageTitle, setImageTitle] = useState('');
  const [largeImageUrl, setLargeImageUrl] = useState('');
  const [data, setData] = useState([]);

  const totalHits = useRef(null);

  useEffect(() => {
    if (search.trim() === '') return;
    setIsLoading(true);
    fetchPixabay(search.trim(), currentPage)
      .then(newData => {
        totalHits.current = newData.totalHits;
        setData(data => {
          if (currentPage === 1) {
            return newData.hits;
          }
          return [...data, ...newData.hits];
        });
      })
      .finally(() => setIsLoading(false));
  }, [search, currentPage]);

  useEffect(() => {
    console.log(totalHits.current);
    data.length >= totalHits.current
      ? setLoadMoreStatus(false)
      : setLoadMoreStatus(true);
  }, [data, totalHits]);

  function onSubmit(event) {
    event.preventDefault();
    setCurrentPage(1);
    setSearch(event.currentTarget.elements.searchField.value);
  }

  function onLoadMoreButtonClick() {
    setCurrentPage(currentPage + 1);
  }

  function setDataForModal(src, imageTitle) {
    setLargeImageUrl(src);
    setImageTitle(imageTitle);
  }

  function onClick(event) {
    if (event.target.tagName === 'IMG') {
      const largeImageUrl = event.target.dataset.largeimageurl;
      const imageTitle = event.target.alt;
      setDataForModal(largeImageUrl, imageTitle);
      isModalOpen(true);
    }
  }

  return (
    <AppStyled>
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery onClick={onClick} data={data} />
      {loadMoreStatus && (
        <Button onLoadMoreButtonClick={onLoadMoreButtonClick} />
      )}

      {isLoading && (
        <Box>
          <Bars height="100" width="100" color="grey" ariaLabel="loading" />
        </Box>
      )}

      {isModalOpen && (
        <Modal isModalOpen={setIsModalOpen}>
          <ImageStyled src={largeImageUrl} alt={imageTitle} />
        </Modal>
      )}
    </AppStyled>
  );
}
