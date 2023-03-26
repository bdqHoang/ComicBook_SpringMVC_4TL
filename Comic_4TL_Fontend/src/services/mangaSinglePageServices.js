import api from "./api";

class MangaSinglePageServices{

    // Get all chapters by manga id
    getChapterManga(Id){
        return api.get("/chapter/getChapters-MangaId?${Id}");
    }

    // Get all chapters by manga id
    getManga(Id){
        return api.get("/manga/getmanga-mangaid?${Id}");
    }

    // Get feedback by manga id
    getFeedback_MangaId(Id){
        return api.get("/feedback/getfeedback-mangaid?${Id}");
    }

    // Get feedback by repply id
    getFeedback_ReplyId(Id){
        return api.get("/feedback/getfeedback-repplyid?${Id}");
    }
    
    // Count feedback by manga id
    countFeedback_MangaId(Id){
        return api.get("/feedback/countfeedback?${Id}");
    }
}