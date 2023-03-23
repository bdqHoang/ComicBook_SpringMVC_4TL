package com.comic_4tl.backend_comic_4tl.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.comic_4tl.backend_comic_4tl.model.ImageChapter;

public interface ImageChapterRespository extends JpaRepository<ImageChapter, Integer> {
    @Query(value = "select * from image_chapter where chapter_id = ?1", nativeQuery = true)
    
    public List<ImageChapter> findByChapter_id(int chapter_id);
}
