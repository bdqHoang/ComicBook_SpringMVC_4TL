package com.comic_4tl.backend_comic_4tl.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.comic_4tl.backend_comic_4tl.model.Manga;
import com.comic_4tl.backend_comic_4tl.repository.MangaRespository;

@Service
public class HomeServices {

    @Autowired
    MangaRespository mangaRespository;

    public List<Manga> getNewSeason() {

        return mangaRespository.findAll();
    }

    public Optional<Manga> getMangaById(Integer manga_id) {
        return mangaRespository.findById(manga_id);
    }

    public Manga getMangaId(Integer manga_id) {
        return mangaRespository.getMangaById(manga_id);
    }

}
