package com.comic_4tl.backend_comic_4tl.model.Key;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Data;

@Embeddable
@Data
public class GenreDetailKey implements Serializable {
    @Column(name = "genre_id", nullable = false)
    private int genre_id;
    @Column(name = "manga_id", nullable = false)
    private int manga_id;

}
