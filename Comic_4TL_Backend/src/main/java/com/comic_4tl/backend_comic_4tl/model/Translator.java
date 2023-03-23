package com.comic_4tl.backend_comic_4tl.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
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
@Table(name = "translator")
public class Translator {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int translator_id;
    @Column(name = "name", nullable = false)
    private String name;

    @OneToMany(mappedBy = "translator", fetch = FetchType.LAZY , cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Manga> mangas;
}
