package com.comic_4tl.backend_comic_4tl.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.comic_4tl.backend_comic_4tl.model.Feedback;

public interface FeedbackRespository extends JpaRepository<Feedback, Integer> {

    @Query(value = "select * from feedback where user_id = ?1", nativeQuery = true)
    public List<Feedback> findByUser_id(int user_id);

    @Query(value = "select * from feedback where manga_id = ?1", nativeQuery = true)
    public List<Feedback> findByManga_id(int manga_id);
    
    @Query(value = "select * from feedback where repply_id = ?1", nativeQuery = true)
    public List<Feedback> findByRepply_id(int repply_id);

}
