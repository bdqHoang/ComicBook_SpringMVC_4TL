package com.comic_4tl.backend_comic_4tl.model;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "manga")
public class Manga {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int manga_id;
    @Column(name = "name", nullable = false)
    private String name;
    @Column(name = "avatar")
    private String avata;
    @Column(name = "description")
    private String description;
    @Column(name = "ratting")
    private float ratting;
    @Column(name = "views")
    private int views;
    @Column(name = "release_day", nullable = false)
    private Date releaseDay;
    @Column(name = "status", nullable = false)
    private boolean enable;

    @OneToMany(mappedBy = "manga", fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<GenreDetail> listGenre = new ArrayList();

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "author_id")
    @JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
    @JsonBackReference
    private Author author;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "translator_id")
    @JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
    @JsonBackReference
    private Translator translator;

    @OneToMany(mappedBy = "manga", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
    @JsonManagedReference
    private List<Chapters> chapters = new ArrayList();

}
