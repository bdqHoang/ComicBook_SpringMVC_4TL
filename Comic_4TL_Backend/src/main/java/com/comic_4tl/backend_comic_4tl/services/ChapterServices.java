package com.comic_4tl.backend_comic_4tl.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.comic_4tl.backend_comic_4tl.model.Chapters;
import com.comic_4tl.backend_comic_4tl.repository.ChaptersRespository;

@Service
public class ChapterServices {
    @Autowired
    private ChaptersRespository chaptersRespository;

    public List<Chapters> getAllChapter() {
        return chaptersRespository.findAll();
    }

    public List<Chapters> getChapterByMangaId(int id) {
        return chaptersRespository.findByMangaId(id);
    }

}
