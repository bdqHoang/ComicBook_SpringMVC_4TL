import axios from 'axios';
const api = axios.create({
    baseURL : process.env.REACT_APP_COMIC_4TL_FONTEND_API_KEY,
    headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`}
})

export default api;