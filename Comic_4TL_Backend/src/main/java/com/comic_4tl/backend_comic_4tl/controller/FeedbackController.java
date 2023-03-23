package com.comic_4tl.backend_comic_4tl.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.comic_4tl.backend_comic_4tl.model.Feedback;
import com.comic_4tl.backend_comic_4tl.services.FeedbackServices;

@RestController
@RequestMapping("/feedback")
public class FeedbackController {
    @Autowired
    private FeedbackServices feedbackServices;

    @GetMapping(value = "/allfeedback")
    public List<Feedback> getAllFeedback() {
        return feedbackServices.getAllFeedback();
    }

    @GetMapping(value = "/getfeedback-userid")
    public List<Feedback> getAllFeedbackByUserId(int id) {
        return feedbackServices.getFeedbackByUserId(id);
    }

    @GetMapping(value = "/getfeedback-mangaid")
    public List<Feedback> getAllFeedbackByMangaId(int id) {
        return feedbackServices.getFeedbackByMangaId(id);
    }

    @GetMapping(value = "/getfeedback-repplyid")
    public List<Feedback> getAllFeedbackByRepplyId(int id) {
        return feedbackServices.getFeedbackByRepplyId(id);
    }
}
