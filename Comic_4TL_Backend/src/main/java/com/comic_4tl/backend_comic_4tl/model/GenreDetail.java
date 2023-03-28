package com.comic_4tl.backend_comic_4tl.model;

import com.comic_4tl.backend_comic_4tl.model.Key.GenreDetailKey;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "genre_detail")
public class GenreDetail {
    @EmbeddedId
    private GenreDetailKey genreDetailKey;

    @ManyToOne
    @MapsId("genre_id")
    @JoinColumn(name = "genre_id")
    @JsonIgnoreProperties("listManga")
    private Genre genre;

    @ManyToOne
    @MapsId("manga_id")
    @JoinColumn(name = "manga_id")
    @JsonBackReference
    private Manga manga;


}
