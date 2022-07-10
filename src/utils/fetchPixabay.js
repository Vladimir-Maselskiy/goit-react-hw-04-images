export function fetchPixabay(query, currentPage, setData) {
  const KEY = '27043383-c7c491508b66f3626efdecd2d';

  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${currentPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  )
    .then(response => response.json())
    .then(data => {
      setData(data);
    });
}
