package com.comic_4tl.backend_comic_4tl.services;

import java.util.List;

import com.comic_4tl.backend_comic_4tl.model.Role;
import com.comic_4tl.backend_comic_4tl.request.LoginRequest;
import com.comic_4tl.backend_comic_4tl.request.RegisterRequest;
import com.comic_4tl.backend_comic_4tl.security.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.comic_4tl.backend_comic_4tl.model.User;
import com.comic_4tl.backend_comic_4tl.repository.UserRespository;

@Service
public class UserServices {
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    PasswordEncoder encoder;
    @Autowired
    private JwtUtils jwtUtils;
    @Autowired
    UserRespository userRespository;

    public List<User> getAllUser() {
        System.out.print(userRespository);

        return userRespository.findAll();
    }

    public String login(LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);
        return jwt;
    }

    public User register(RegisterRequest registerRequest) {
        User user = new User();
        user.setName(registerRequest.getName());
        user.setEmail(registerRequest.getEmail());
        user.setPassword(encoder.encode(registerRequest.getPassword()));
        
        user.setAvatar(registerRequest.getAvatar());
        user.setRole(Role.ROLE_USER);
        user.setEnable(true);
        userRespository.save(user);
        return user;

    }
}