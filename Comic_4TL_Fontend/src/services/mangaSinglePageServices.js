import api from "./api";

class MangaSinglePageServices {
    getMangaSinglePage = (id) => {
        return api.get(`/manga/${id}`);
    };
}
