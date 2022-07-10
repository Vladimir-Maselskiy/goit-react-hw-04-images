import {
  SearchbarStyled,
  SearchForm,
  SearchButton,
  StyledIcon,
  SearchButtonLabel,
  SearchInput,
} from './Searchbar.styled';

export default function Searchbar({ onSubmit }) {
  return (
    <SearchbarStyled>
      <SearchForm onSubmit={onSubmit}>
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
        />
      </SearchForm>
    </SearchbarStyled>
  );
}
