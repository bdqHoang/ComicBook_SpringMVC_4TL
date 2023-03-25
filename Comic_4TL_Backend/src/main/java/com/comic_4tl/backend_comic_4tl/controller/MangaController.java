package com.comic_4tl.backend_comic_4tl.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.comic_4tl.backend_comic_4tl.services.MangaServices;

@RestController
public class MangaController {
    @Autowired
    private MangaServices mangaServices;

    // get manga by id
    @GetMapping(value = "/getmanga-mangaid")
    public Object getMangaByMangaId(int id) {
        return mangaServices.getMangaByMangaId(id);
    }
}
