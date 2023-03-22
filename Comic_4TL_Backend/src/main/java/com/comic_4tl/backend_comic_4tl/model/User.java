package com.comic_4tl.backend_comic_4tl.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int user_id;
    @Column(name = "name", nullable = false)
    private String name;
    @Column(name = "email", nullable = false)
    private String email;
    @Column(name = "password", nullable = false)
    private String password;
    @Column(name = "avatar", nullable = false)
    private String avatar;
    @Column(name = "role", nullable = false)
    private String role;
    @Column(name = "enable", nullable = false)
    private boolean enable;

    @OneToMany
    @JsonManagedReference
    private List<Feedback> feedbacks = new ArrayList<>();

    @OneToMany
    @JsonManagedReference
    private List<Ratting> rattings = new ArrayList<>();

}
