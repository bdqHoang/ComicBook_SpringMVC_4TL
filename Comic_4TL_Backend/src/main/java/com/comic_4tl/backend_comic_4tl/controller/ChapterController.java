package com.comic_4tl.backend_comic_4tl.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.comic_4tl.backend_comic_4tl.model.Chapters;
import com.comic_4tl.backend_comic_4tl.services.ChapterServices;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/chapter")
public class ChapterController {

    @Autowired
    private ChapterServices chapterServices;

    @GetMapping("/getChapters-MangaId")
    public List<Chapters> getChaptersByMangaId(int id) {
        return chapterServices.getChaptersByMangaId(id);
    }

}