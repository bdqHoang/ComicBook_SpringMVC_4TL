import api from "./api";

export default class MangaSinglePageServices{

    // detail manga
    getManga(id){
        return api.get(`/manga/getmanga-mangaid?id=${id}`);
    }
    
    // Count feedback by manga id
    countFeedback_MangaId(Id){
        return api.get(`/feedback/countfeedback?id=${Id}`);
    }
}