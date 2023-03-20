package com.comic_4tl.backend_comic_4tl.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "image_chapter")
public class ImageChapter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int img_cha_id;
    @Column(name = "chapter_id", nullable = false)
    private int chapter_id;
    @Column(name = "img_src", nullable = false)
    private String img_src;
    @Column(name = "number", nullable = false)
    private int number;

    public ImageChapter() {
    }

    public ImageChapter(int img_cha_id, int chapter_id, String img_src, int number) {
        this.img_cha_id = img_cha_id;
        this.chapter_id = chapter_id;
        this.img_src = img_src;
        this.number = number;
    }

    public int getImg_cha_id() {
        return img_cha_id;
    }

    public void setImg_cha_id(int img_cha_id) {
        this.img_cha_id = img_cha_id;
    }

    public int getChapter_id() {
        return chapter_id;
    }

    public void setChapter_id(int chapter_id) {
        this.chapter_id = chapter_id;
    }

    public String getImg_src() {
        return img_src;
    }

    public void setImg_src(String img_src) {
        this.img_src = img_src;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }
}
