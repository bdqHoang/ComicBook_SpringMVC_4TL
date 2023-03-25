package com.comic_4tl.backend_comic_4tl.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.comic_4tl.backend_comic_4tl.model.ImageChapter;
import com.comic_4tl.backend_comic_4tl.services.ImageChapterServices;

@RestController
public class ImageChapterController {
    @Autowired
    private ImageChapterServices imageChapterServices;

    // find image chapter by chapter id
    @GetMapping(value = "/getimagechapter-chapterid")
    public List<ImageChapter> getImageChapterByChapterId(int chapterId) {
        return imageChapterServices.getImageByChapterID(chapterId);
    }

    // find image chapter by chapter id and manga id in manga table
    @GetMapping(value = "/getimagechapter-mangaid-chapterid")
    public List<ImageChapter> getImageChapterByMangaIdAndChapterId(int mangaId, int chapterId) {
        return imageChapterServices.getImageChapterByMangaIdAndChapterId(mangaId, chapterId);
    }
}

//11 trái banh có 1 trái năng hơn tìm trái đó 
//5 - 5 - 1 -> ra đáp án
// 
//
//
