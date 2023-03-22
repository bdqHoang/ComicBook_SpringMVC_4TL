package com.comic_4tl.backend_comic_4tl.model;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "chapter")
public class Chapters {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int chapter_id;
    @Column(name = "manga_id", nullable = false)
    private int manga_id;
    @Column(name = "name", nullable = false)
    private String name;
    @Column(name = "page_number", nullable = false)
    private int page_number;
    @Column(name = "date_release", nullable = false)
    private Date release_day;
    @Column(name = "enable", nullable = false)
    private boolean enable;

    @ManyToOne()
    @JsonBackReference
    private Manga manga;

}
