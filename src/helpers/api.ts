const apiKey = process.env.REACT_APP_FLICKR_KEY;

export const getPhotos = async (pageParam = 1) => {
  const response = await fetch(
    `https://api.flickr.com/services/rest/?method=flickr.photos.search&text=painting&api_key=${apiKey}&per_page=9&format=json&nojsoncallback=1&page=${pageParam}`
  )
    .then((data) => data.json())
    .then((res) => res.photos);

  return response;
};
