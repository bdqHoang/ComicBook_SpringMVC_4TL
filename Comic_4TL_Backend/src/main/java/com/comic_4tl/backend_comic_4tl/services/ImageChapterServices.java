package com.comic_4tl.backend_comic_4tl.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.comic_4tl.backend_comic_4tl.model.ImageChapter;
import com.comic_4tl.backend_comic_4tl.repository.ImageChapterRespository;

@Service
public class ImageChapterServices {
    @Autowired
    private ImageChapterRespository imageChapterRespository;

    public List<ImageChapter> getImageChapterByChapters(int id) {
        return imageChapterRespository.findByChapter_id(id);
    }

}
