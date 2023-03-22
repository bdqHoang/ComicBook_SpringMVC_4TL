package com.comic_4tl.backend_comic_4tl.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "ratting")
public class Ratting {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ratting_id;
    @Column(name = "number_of_ratting")
    private int ratting;

    @Column(name = "manga_id")
    private int manga_id;

    @Column(name = "user_id")
    private int user_id;

    @ManyToOne
    @JsonBackReference
    private Manga manga;

    @ManyToOne
    @JsonBackReference
    private User user;

}
