package com.comic_4tl.backend_comic_4tl.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.comic_4tl.backend_comic_4tl.model.ImageChapter;
import com.comic_4tl.backend_comic_4tl.repository.ImageChapterRespository;

@Service
public class ImageChapterServices {
    @Autowired
    private ImageChapterRespository imageChapterRespository;

    //get image chapter by chapter id
    public List<ImageChapter> getImageByChapterID(int chapterId) {
        return imageChapterRespository.getChaptersByMangaId(chapterId);
    }

    // find image chapter by chapter id and manga id in manga table
    public List<ImageChapter> getImageChapterByMangaIdAndChapterId(int mangaId, int chapterId) {
        return imageChapterRespository.getImageChapterByMangaIdAndChapterId(mangaId, chapterId);
    }
}
