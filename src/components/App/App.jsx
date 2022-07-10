import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Button from 'components/Button/Button';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import { AppStyled } from './App.styled';
import { Bars } from 'react-loader-spinner';
// import { ImageStyled } from ".components/M";
import Box from 'components/Box/Box';
import Modal from 'components/Modal/Modal';
import { fetchPixabay } from 'utils/fetchPixabay';
import { ImageStyled } from 'components/Modal/Modal.styled';

export class App extends Component {
  state = {
    search: '',
    currentPage: 1,
    loadMoreStatus: false,
    isLoading: false,
    isModalOpen: false,
    imageTitle: '',
    largeImageUrl: '',
    data: [],
  };

  totalHits = null;

  componentDidUpdate(_, prevState) {
    const { search, currentPage } = this.state;
    if (
      (prevState.search !== search || prevState.currentPage !== currentPage) &&
      search.trim()
    ) {
      this.isLoading(true);
      fetchPixabay(search.trim(), currentPage, this.setData).finally(() => {
        this.isLoading(false);
      });
    }

    if (prevState.data !== this.state.data) {
      this.state.data.length >= this.totalHits
        ? this.loadMoreStatus(false)
        : this.loadMoreStatus(true);
    }
  }

  setData = newData => {
    this.totalHits = newData.totalHits;

    this.setState(state => {
      if (this.state.currentPage === 1) {
        return { data: newData.hits };
      }
      return {
        data: [...state.data, ...newData.hits],
      };
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({ currentPage: 1 });
    this.setState({ search: event.currentTarget.elements.searchField.value });
  };

  onLoadMoreButtonClick = () => {
    this.setState({ currentPage: this.state.currentPage + 1 });
  };

  loadMoreStatus = status => {
    this.setState({ loadMoreStatus: status });
  };

  isLoading = status => {
    this.setState({ isLoading: status });
  };

  isModalOpen = status => {
    this.setState({ isModalOpen: status });
  };

  setDataForModal = (src, imageTitle) => {
    this.setState({ largeImageUrl: src, imageTitle });
  };

  render() {
    const {
      loadMoreStatus,
      isLoading,
      isModalOpen,
      largeImageUrl,
      imageTitle,
      data,
    } = this.state;

    return (
      <AppStyled>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery
          isModalOpen={this.isModalOpen}
          setDataForModal={this.setDataForModal}
          data={data}
        />
        {loadMoreStatus && (
          <Button onLoadMoreButtonClick={this.onLoadMoreButtonClick} />
        )}

        {isLoading && (
          <Box>
            <Bars height="100" width="100" color="grey" ariaLabel="loading" />
          </Box>
        )}

        {isModalOpen && (
          <Modal isModalOpen={this.isModalOpen}>
            <ImageStyled src={largeImageUrl} alt={imageTitle} />
          </Modal>
        )}
      </AppStyled>
    );
  }
}
