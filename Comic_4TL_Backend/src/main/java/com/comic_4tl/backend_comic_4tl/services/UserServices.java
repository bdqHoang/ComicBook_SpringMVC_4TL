package com.comic_4tl.backend_comic_4tl.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.comic_4tl.backend_comic_4tl.model.User;
import com.comic_4tl.backend_comic_4tl.repository.UserRespository;

@Service
public class UserServices {

    @Autowired
    UserRespository userRespository;

    public List<User> getAllUser() {
        System.out.print(userRespository);

        return userRespository.findAll();
    }

    public User findByUsername(String name) {
        return userRespository.findByName(name);
    }

}