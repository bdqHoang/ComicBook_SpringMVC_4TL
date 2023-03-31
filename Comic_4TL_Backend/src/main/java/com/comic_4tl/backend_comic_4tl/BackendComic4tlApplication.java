package com.comic_4tl.backend_comic_4tl;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin(origins = "*", maxAge = 3600)
public class BackendComic4tlApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendComic4tlApplication.class, args);

	}

}
