package com.comic_4tl.backend_comic_4tl.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.comic_4tl.backend_comic_4tl.model.Genre;
import com.comic_4tl.backend_comic_4tl.model.Manga;
import com.comic_4tl.backend_comic_4tl.services.GenreServices;
import com.comic_4tl.backend_comic_4tl.services.HomeServices;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/home")
public class HomeController {
    @Autowired
    private HomeServices homeServices;

    @Autowired
    private GenreServices genreServices;

    @GetMapping("/new-season")
    public List<Manga> getNewSeason() {

        return homeServices.getNewSeason();
    }

    @GetMapping("/recent-release")
    public List<Manga> getRecentRelease() {

        return homeServices.getRecentRelease();
    }

    @GetMapping("/all-manga")
    public List<Manga> getAllManga() {

        return homeServices.getAllManga();
    }

    @GetMapping("/all-manga-order-by-views")
    public List<Manga> getAllMangaOrderByViews() {

        return homeServices.getAllMangaOrderByViews();
    }

    @GetMapping("/all-manga-order-by-ratting")

    public List<Manga> getAllMangaOrderByRatting() {

        return homeServices.getAllMangaOrderByRatting();
    }

    @GetMapping("/top-genre")
    public List<Genre> getTopGenre() {
        return genreServices.getGenreLimit4();
    }

    @GetMapping("/all-genre")
    public List<Genre> allGenre() {
        return genreServices.getAllGenre();
    }

    @PostMapping("/search")
    public List<Manga> searchManga(String name) {
        System.out.println(name);
        return homeServices.searchManga(name);
    }

    // @Autowired
    // private DataSource dataSource;

    // @RequestMapping("/check")
    // public void checkDatabaseConnection() {
    // try {
    // Connection connection = dataSource.getConnection();
    // if (connection != null) {
    // System.out.println("Kết nối cơ sở dữ liệu thành công!");
    // } else {
    // System.out.println("Không thể kết nối cơ sở dữ liệu!");
    // }
    // } catch (SQLException e) {
    // System.out.println("Lỗi khi kết nối cơ sở dữ liệu: " + e.getMessage());
    // }
    // }
}
