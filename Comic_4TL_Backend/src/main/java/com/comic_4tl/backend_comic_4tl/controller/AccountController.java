package com.comic_4tl.backend_comic_4tl.controller;

import com.comic_4tl.backend_comic_4tl.repository.UserRespository;
import com.comic_4tl.backend_comic_4tl.request.LoginRequest;
import com.comic_4tl.backend_comic_4tl.request.RegisterRequest;
import com.comic_4tl.backend_comic_4tl.security.JwtUtils;
import com.comic_4tl.backend_comic_4tl.security.UserDetailsImpl;
import com.comic_4tl.backend_comic_4tl.services.UserServices;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class AccountController {
    @Autowired
    UserServices userServices;

    @GetMapping("/api/test")
    public String test() {
        return "test";
    }

    @PostMapping("/api/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginRequest loginRequest) {
        var jwt = userServices.login(loginRequest);
        var response = new Object() {
            public String token = jwt;
            public String message = "login successfully";
        };
        return ResponseEntity.ok(response);
    }
    @PostMapping("/api/register")
    public ResponseEntity<?> register(@Valid @RequestBody RegisterRequest registerRequest) {
        var user = userServices.register(registerRequest);
        var response = new Object() {
            public String message = "register successfully";
        };
        return ResponseEntity.ok(response);
    }

    @GetMapping("/api/protected")
    public String protectedResource() {
        return "protected";
    }
}