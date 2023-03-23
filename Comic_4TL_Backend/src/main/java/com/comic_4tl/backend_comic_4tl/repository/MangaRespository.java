package com.comic_4tl.backend_comic_4tl.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.comic_4tl.backend_comic_4tl.model.Manga;

public interface MangaRespository extends JpaRepository<Manga, Integer> {
    Manga findByName(String name);

    @Query(value = "SELECT * FROM manga WHERE manga_id = ?1", nativeQuery = true)
    Manga getMangaById(int manga_id);
}
