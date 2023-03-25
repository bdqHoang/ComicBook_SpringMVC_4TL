package com.comic_4tl.backend_comic_4tl.model;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
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

        @OneToMany(mappedBy = "genre", fetch = FetchType.LAZY)
        @JsonManagedReference
        private List<GenreDetail> listManga = new ArrayList();
}
