import { Component } from 'react';
import {
  SearchbarStyled,
  SearchForm,
  SearchButton,
  StyledIcon,
  SearchButtonLabel,
  SearchInput,
} from './Searchbar.styled';

export default class Searchbar extends Component {
  state = {
    search: '',
  };

  onChange = event => {
    this.setState({ search: event.target.value });
  };

  render() {
    return (
      <SearchbarStyled>
        <SearchForm onSubmit={this.props.onSubmit}>
          <SearchButton type="submit">
            <StyledIcon />
            <SearchButtonLabel>Search</SearchButtonLabel>
          </SearchButton>

          <SearchInput
            name="searchField"
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onChange}
          />
        </SearchForm>
      </SearchbarStyled>
    );
  }
}
