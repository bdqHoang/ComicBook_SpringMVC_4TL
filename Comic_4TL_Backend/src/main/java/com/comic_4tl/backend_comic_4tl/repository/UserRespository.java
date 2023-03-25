package com.comic_4tl.backend_comic_4tl.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.comic_4tl.backend_comic_4tl.model.User;

@Repository
public interface UserRespository extends JpaRepository<User, Integer> {
    public User findByName(String name);

    User findByEmail(String email);
}
