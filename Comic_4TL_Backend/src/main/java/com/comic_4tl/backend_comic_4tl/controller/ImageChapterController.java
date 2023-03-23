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

    //find image chapter by chapter id
    @GetMapping(value = "/getimagechapter-chapterid")
    public List<ImageChapter> getImageChapterByChapters(int id) {
        return imageChapterServices.getImageChapterByChapters(id);
    }
}
