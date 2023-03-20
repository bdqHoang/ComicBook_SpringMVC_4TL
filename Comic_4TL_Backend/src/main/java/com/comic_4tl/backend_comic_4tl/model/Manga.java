package com.comic_4tl.backend_comic_4tl.model;

import java.sql.Date;
import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "manga")
public class Manga {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int manga_id;
    @Column(name = "author_id", nullable = false)
    private int author_id;
    @Column(name = "translator_id", nullable = false)
    private int translator_id;
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
    private Date release_day;
    @Column(name = "status", nullable = false)
    private boolean enable;

    @ManyToMany(mappedBy = "manga")
    private Set<Genre> genres = new HashSet<>();

    @ManyToOne()
    @JoinColumn(name = "author_id", referencedColumnName = "author_id", insertable = false, updatable = false)
    private Author author;

    @ManyToOne()
    @JoinColumn(name = "translator_id", referencedColumnName = "translator_id", insertable = false, updatable = false)
    private Translator translator;

}
