import axios from 'axios';
export default api = axios.create({
    baseURL : process.env.REACT_APP_COMIC_4TL_FONTEND_API_KEY
})