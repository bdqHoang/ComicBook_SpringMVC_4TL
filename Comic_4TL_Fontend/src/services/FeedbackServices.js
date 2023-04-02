import api from "./api";

export default class FeedbackServices{

    // Count feedback by manga id
    countFeedback_MangaId(Id){
        return api.get(`/feedback/countfeedback?id=${Id}`);
    }

    //get feedback by manga id
    getFeedback_MangaId(Id){
        return api.get(`/feedback/getfeedback-mangaid?id=${Id}`);
    }
}