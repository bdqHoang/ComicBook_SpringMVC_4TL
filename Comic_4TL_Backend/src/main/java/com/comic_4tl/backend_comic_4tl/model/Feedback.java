package com.comic_4tl.backend_comic_4tl.model;

import java.sql.Date;

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
@Table(name = "feedback")
public class Feedback {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int feedback_id;
    @Column(name = "user_id", nullable = false)
    private int user_id;
    @Column(name = "manga_id", nullable = false)
    private int manga_id;
    @Column(name = "repply_id", nullable = false)
    private int repply_id;
    @Column(name = "comment", nullable = false)
    private String comment;
    @Column(name = "create_at", nullable = false)
    private Date create_at;

    @ManyToOne()
    @JsonBackReference()
    private Manga manga;

    @ManyToOne()
    @JsonBackReference()
    private User user;

}
