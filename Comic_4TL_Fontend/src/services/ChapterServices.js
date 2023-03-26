import api from "./api";

class ChapterServices{
    // Get all chapters by manga id
    getChapters(Id){
        return api.get(`/chapters/${Id}`);
    }
}