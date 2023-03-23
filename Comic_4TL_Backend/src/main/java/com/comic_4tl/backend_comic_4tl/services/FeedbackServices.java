package com.comic_4tl.backend_comic_4tl.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.comic_4tl.backend_comic_4tl.model.Feedback;
import com.comic_4tl.backend_comic_4tl.repository.FeedbackRespository;

@Service
public class FeedbackServices {
    @Autowired
    private FeedbackRespository feedbackRespository;

    public List<Feedback> getAllFeedback() {
        return feedbackRespository.findAll();
    }

    public List<Feedback> getFeedbackByUserId(int id) {
        return feedbackRespository.findByUser_id(id);
    }

    public List<Feedback> getFeedbackByMangaId(int id) {
        return feedbackRespository.findByManga_id(id);
    }

    public List<Feedback> getFeedbackByRepplyId(int id) {
        return feedbackRespository.findByRepply_id(id);
    }
    
}
