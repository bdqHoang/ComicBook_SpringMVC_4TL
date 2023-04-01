package com.comic_4tl.backend_comic_4tl.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.comic_4tl.backend_comic_4tl.model.Genre;
import com.comic_4tl.backend_comic_4tl.repository.GenreRespository;

@Service
public class GenreServices {

    @Autowired
    GenreRespository genreRespository;

    public List<Genre> getAllGenre() {

        return genreRespository.findAll();
    }

    public List<Genre> getGenreLimit4() {

        return genreRespository.getGenreLimit4();
    }

    public List<Genre> getGenreByMangaIdAndGenreId(int mangaId, List<Integer> genreId) {

        return genreRespository.getGenreByMangaIdAndGenreId(mangaId, genreId);
    }



}
