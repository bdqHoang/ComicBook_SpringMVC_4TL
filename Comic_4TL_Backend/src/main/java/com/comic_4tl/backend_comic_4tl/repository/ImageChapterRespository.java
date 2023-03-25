package com.comic_4tl.backend_comic_4tl.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.comic_4tl.backend_comic_4tl.model.ImageChapter;

public interface ImageChapterRespository extends JpaRepository<ImageChapter, Integer> {
    @Query(value = "SELECT * FROM image_chapter WHERE chapter_id = ?1", nativeQuery = true)
    List<ImageChapter> getChaptersByMangaId(int chapterId);

    // find image chapter by chapter id and manga id in manga table
    @Query(value = "SELECT * FROM image_chapter WHERE chapter_id = ?1 and ", nativeQuery = true)
    List<ImageChapter> getImageChapterByMangaIdAndChapterId(int mangaId, int chapterId);
}
