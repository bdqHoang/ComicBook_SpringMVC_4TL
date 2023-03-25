package com.comic_4tl.backend_comic_4tl.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import com.comic_4tl.backend_comic_4tl.model.Chapters;
import com.comic_4tl.backend_comic_4tl.repository.ChaptersRespository;

@Service
public class ChapterServices {
    @Autowired
    private ChaptersRespository chaptersRespository;

    public List<Chapters> getChaptersByMangaId(int id) {
        return chaptersRespository.getChaptersByMangaId(id);
    }

    public Chapters getChapterByChapterId(int id) {
        return chaptersRespository.getChapterByChapterId(id);
    }

}
