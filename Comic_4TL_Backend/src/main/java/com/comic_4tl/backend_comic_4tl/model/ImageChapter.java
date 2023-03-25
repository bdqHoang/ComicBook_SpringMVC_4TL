package com.comic_4tl.backend_comic_4tl.model;

import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "image_chapter")
public class ImageChapter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int imgChaId;
    @Column(name = "img_src", nullable = false)
    private String imgSrc;
    @Column(name = "number", nullable = false)
    private int number;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "chapter_id")
    @JsonBackReference
    private Chapters chapter;

}
