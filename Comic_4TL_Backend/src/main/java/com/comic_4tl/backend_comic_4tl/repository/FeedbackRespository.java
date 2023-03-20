package com.comic_4tl.backend_comic_4tl.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.comic_4tl.backend_comic_4tl.model.Feedback;

public interface FeedbackRespository extends JpaRepository<Feedback, Integer> {

}
