package com.comic_4tl.backend_comic_4tl.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "ratting")
public class Ratting {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ratting_id;
    @Column(name = "ratting")
    private int ratting;

    public Ratting() {
    }

    public Ratting(int ratting_id, int ratting) {
        this.ratting_id = ratting_id;
        this.ratting = ratting;
    }

    public int getRatting_id() {
        return ratting_id;
    }

    public void setRatting_id(int ratting_id) {
        this.ratting_id = ratting_id;
    }

    public int getRatting() {
        return ratting;
    }

    public void setRatting(int ratting) {
        this.ratting = ratting;
    }

}
