import api from "./api";

export default class ChapterServices{
    
    //get chapter by manga id
    getChapter_MangaId(id){
        return api.get(`/chapter/getChapters-MangaId?id=${id}`);
    }
}