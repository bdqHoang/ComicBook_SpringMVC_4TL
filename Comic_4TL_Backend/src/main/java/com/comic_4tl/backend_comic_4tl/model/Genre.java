package com.comic_4tl.backend_comic_4tl.model;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "genre")
public class Genre {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private int genre_id;
        @Column(name = "name", nullable = false)
        private String name;

        @ManyToMany
        @JoinTable(name = "genre_detail", joinColumns = @JoinColumn(name = "genre_id"), inverseJoinColumns = @JoinColumn(name = "manga_id"))
        private Set<Manga> manga = new HashSet<>();
}
