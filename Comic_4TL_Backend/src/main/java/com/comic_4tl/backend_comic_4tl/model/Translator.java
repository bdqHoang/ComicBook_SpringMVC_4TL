package com.comic_4tl.backend_comic_4tl.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "translator")
public class Translator {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int translator_id;
    @Column(name = "name", nullable = false)
    private String name;

    public Translator() {
    }

    public Translator(int translator_id, String name) {
        this.translator_id = translator_id;
        this.name = name;
    }

    public int getTranslator_id() {
        return translator_id;
    }

    public void setTranslator_id(int translator_id) {
        this.translator_id = translator_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
