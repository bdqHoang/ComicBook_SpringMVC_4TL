package com.comic_4tl.backend_comic_4tl.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.comic_4tl.backend_comic_4tl.model.Manga;

public interface MangaRespository extends JpaRepository<Manga, Integer> {

    // get manga by manga id
    @Query(value = "SELECT * FROM manga WHERE manga_id = ?1", nativeQuery = true)
    Manga getMangaByMangaId(int id);

    List<Manga> findTop4ByOrderByReleaseDayDesc();

    @Query(value = "SELECT manga.* , Max(Chapter.release_day) as maxDay FROM manga join chapter ON manga.manga_id = chapter.manga_id Group by manga.manga_id ORDER BY maxDay DESC LIMIT 7", nativeQuery = true)
    List<Manga> findTop7RecentRelease();

    @Query(value = "SELECT * FROM manga ORDER BY release_day LIMIT ?1 , 12", nativeQuery = true)
    List<Manga> findAllByOrderByReleaseDayDesc(int page);

    List<Manga> findAllByOrderByViewsDesc();

    List<Manga> findAllByOrderByRattingDesc();

    @Query(value = "SELECT * FROM manga WHERE name LIKE %?1%", nativeQuery = true)
    List<Manga> findByName(String name);

}
