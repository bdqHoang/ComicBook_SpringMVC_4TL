package com.comic_4tl.backend_comic_4tl.services;

import java.util.List;

import com.comic_4tl.backend_comic_4tl.request.LoginRequest;
import com.comic_4tl.backend_comic_4tl.security.JwtUtils;
import com.comic_4tl.backend_comic_4tl.security.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.comic_4tl.backend_comic_4tl.model.User;
import com.comic_4tl.backend_comic_4tl.repository.UserRespository;

@Service
public class UserServices {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtils jwtUtils;
    @Autowired
    UserRespository userRespository;

    public List<User> getAllUser() {
        System.out.print(userRespository);

        return userRespository.findAll();
    }

    public User findByUsername(String name) {
        return userRespository.findByName(name);
    }
    public String login(LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

        return jwt;
    }


}