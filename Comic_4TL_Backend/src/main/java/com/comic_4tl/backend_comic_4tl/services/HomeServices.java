package com.comic_4tl.backend_comic_4tl.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.comic_4tl.backend_comic_4tl.model.Manga;
import com.comic_4tl.backend_comic_4tl.repository.MangaRespository;

@Service
public class HomeServices {

    @Autowired
    MangaRespository mangaRespository;

    public List<Manga> getNewSeason() {

        return mangaRespository.findTop4ByOrderByReleaseDayDesc();
    }

    public List<Manga> getRecentRelease() {

        return mangaRespository.findTop7RecentRelease();
    }

    // get all manga orderby desc

    public List<Manga> getAllManga() {

        return mangaRespository.findAllByOrderByReleaseDayDesc();
    }

    // get all manga orderby views

    public List<Manga> getAllMangaOrderByViews() {

        return mangaRespository.findAllByOrderByViewsDesc();
    }

    // get all manga orderby ratting

    public List<Manga> getAllMangaOrderByRatting() {

        return mangaRespository.findAllByOrderByRattingDesc();
    }

    public List<Manga> searchManga(String name) {
        return mangaRespository.findByName(name);
    }

}
