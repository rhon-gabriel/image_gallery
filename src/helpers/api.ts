import axios from 'axios'

const apiKey = process.env.REACT_APP_FLICKR_KEY

export const getPhotos = async (pageParam = 1) => {
    const response = await axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${apiKey}&per_page=10&format=json&nojsoncallback=1&page=${pageParam}`)
    return response.data?.photos
}