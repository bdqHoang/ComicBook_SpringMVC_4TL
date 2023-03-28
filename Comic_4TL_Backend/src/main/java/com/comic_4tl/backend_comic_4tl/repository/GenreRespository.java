package com.comic_4tl.backend_comic_4tl.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.comic_4tl.backend_comic_4tl.model.Genre;

public interface GenreRespository extends JpaRepository<Genre, Integer> {

    @Query(value = "Select * from genre limit 4", nativeQuery = true)
    List<Genre> getGenreLimit4();

}
