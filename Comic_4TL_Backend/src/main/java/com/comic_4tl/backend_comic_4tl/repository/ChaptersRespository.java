package com.comic_4tl.backend_comic_4tl.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.comic_4tl.backend_comic_4tl.model.Chapters;

public interface ChaptersRespository extends JpaRepository<Chapters, Integer> {
    @Query(value = "SELECT * FROM chapter WHERE manga_id = ?1", nativeQuery = true)
    List<Chapters> getChaptersByMangaId(int id);

    // get chapter by chapter id
    @Query(value = "SELECT * FROM chapter WHERE chapter_id = ?1", nativeQuery = true)
    Chapters getChapterByChapterId(int id);
}
