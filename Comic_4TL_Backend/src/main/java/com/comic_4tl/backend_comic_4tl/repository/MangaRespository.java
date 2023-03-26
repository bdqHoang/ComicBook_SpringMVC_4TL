package com.comic_4tl.backend_comic_4tl.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.comic_4tl.backend_comic_4tl.model.Manga;

public interface MangaRespository extends JpaRepository<Manga, Integer> {

    // get manga by manga id
    @Query(value = "SELECT * FROM manga WHERE manga_id = ?1", nativeQuery = true)
    List<Manga> getMangaByMangaId(int id);

    List<Manga> findTop4ByOrderByReleaseDayDesc();

}
