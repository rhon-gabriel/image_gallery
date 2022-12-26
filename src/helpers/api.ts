const apiKey = process.env.REACT_APP_FLICKR_KEY;

export const getPhotos = async (pageParam = 1) => {
  const response = await fetch(
    `https://api.flickr.com/services/rest/?method=flickr.photos.search&text=kiruna&api_key=${apiKey}&per_page=9&format=json&nojsoncallback=1&page=${pageParam}`
  )
    .then((res) => res.json())
    .then((res) => {
      if (res.stat === "fail") {
        return Promise.reject(res);
      } else {
        return res.photos;
      }
    });

  return response;
};
