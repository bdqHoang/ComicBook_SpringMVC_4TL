package com.comic_4tl.backend_comic_4tl.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.comic_4tl.backend_comic_4tl.model.Manga;
import com.comic_4tl.backend_comic_4tl.repository.MangaRespository;

@Service
public class MangaServices {
    @Autowired
    private MangaRespository mangaRepository;

    //get manga by ud
    public List<Manga> getMangaByMangaId(int id) {
        return mangaRepository.getMangaByMangaId(id);
    }
}
