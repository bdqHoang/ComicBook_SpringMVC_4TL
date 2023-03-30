package com.comic_4tl.backend_comic_4tl.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.comic_4tl.backend_comic_4tl.model.Chapters;
import com.comic_4tl.backend_comic_4tl.model.ImageChapter;
import com.comic_4tl.backend_comic_4tl.model.Manga;
import com.comic_4tl.backend_comic_4tl.repository.MangaRespository;

@Service
public class MangaServices {
    @Autowired
    private MangaRespository mangaRepository;

    @Autowired
    private ChapterServices chapterServices;
    @Autowired
    private ImageChapterServices imageChapterServices;

    // get manga by ud
    public Manga getMangaByMangaId(int id) {
        return mangaRepository.getMangaByMangaId(id);
    }

    // get chapter by manga id
    public List<Chapters> getChappterInManga(int mangaId) {
        return chapterServices.getChaptersByMangaId(mangaId);
    }

    // get image in chappter
    public List<ImageChapter> getChapterByChapterId(int chapterId) {
        return imageChapterServices.getImageByChapterID(chapterId);
    }

}
