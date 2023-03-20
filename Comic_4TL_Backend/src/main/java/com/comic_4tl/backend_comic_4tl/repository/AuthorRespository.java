package com.comic_4tl.backend_comic_4tl.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.comic_4tl.backend_comic_4tl.model.Author;

@Repository
public interface AuthorRespository extends JpaRepository<Author, Integer> {

}
