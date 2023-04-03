import api from "./api";

export default class ChapterImangeServices{
    //get chapter image by chapter id
    getChapterImageByChapterId(id){
        return api.get(`/imagechapter/getimagechapter-chapterid?chapterId=${id}`);
    }
}