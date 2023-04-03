package com.comic_4tl.backend_comic_4tl.model;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

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
@Table(name = "chapter")
public class Chapters {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private int chapter_id;
    @Column(name = "name", nullable = false)
    private String name;
    @Column(name = "page_number", nullable = false)
    private int page_number;
    @Column(name = "release_day", nullable = false)
    private Date release_day;
    @Column(name = "enable", nullable = false)
    private boolean enable;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "manga_id")
<<<<<<< HEAD
    @JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })

=======
    @JsonIgnoreProperties({ "feedBacks", "chapters", "listGenre", "hibernateLazyInitializer", "handler" })
>>>>>>> feature_hoang
    private Manga manga;

}
