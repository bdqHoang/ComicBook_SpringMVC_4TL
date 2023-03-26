package com.comic_4tl.backend_comic_4tl.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.comic_4tl.backend_comic_4tl.model.Feedback;

public interface FeedbackRespository extends JpaRepository<Feedback, Integer> {

    //if repply_id: 0 -> feedback, else -> repply
    @Query(value = "select * from feedback where repply_id = ?1", nativeQuery = true)
    public List<Feedback> getAllFeedback(int id);

    @Query(value = "select * from feedback where user_id = ?1", nativeQuery = true)
    public List<Feedback> findByUser_id(int user_id);

    @Query(value = "select * from feedback where manga_id = ?1", nativeQuery = true)
    public List<Feedback> findByManga_id(int manga_id);
    
    @Query(value = "select * from feedback where repply_id = ?1", nativeQuery = true)
    public List<Feedback> findByRepply_id(int repply_id);

    //count feedback
    @Query(value = "select count(*) from feedback where manga_id = ?1", nativeQuery = true)
    public int countFeedback(int manga_id);
}
