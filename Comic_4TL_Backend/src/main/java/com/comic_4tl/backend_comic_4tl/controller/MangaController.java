package com.comic_4tl.backend_comic_4tl.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.comic_4tl.backend_comic_4tl.services.GenreServices;
import com.comic_4tl.backend_comic_4tl.services.MangaServices;

@RestController
@RequestMapping(value = "/manga")
public class MangaController {
    @Autowired
    private MangaServices mangaServices;
    @Autowired
    GenreServices genreServices;

    // get manga by id
    @GetMapping(value = "/getmanga-mangaid")
    public Object getMangaByMangaId(int id) {
        return mangaServices.getMangaByMangaId(id);
    }

    @GetMapping(value = "/getmanga-genreid")
    public Object getMangaByGenreId(int id, List<Integer> listGenre) {
        return genreServices.getGenreByMangaIdAndGenreId(id, listGenre);
    }
}
