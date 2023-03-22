package com.comic_4tl.backend_comic_4tl.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.comic_4tl.backend_comic_4tl.model.Manga;
import com.comic_4tl.backend_comic_4tl.services.HomeServices;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class HomeController {
    @Autowired
    private HomeServices homeServices;

    @GetMapping("/season")
    public List<Manga> getNewSeason() {

        return homeServices.getNewSeason();
    }

    @GetMapping("/getmanga")
    public Optional<Manga> getMangaById(Integer id) {
        id = 1;
        Optional<Manga> manga = homeServices.getMangaById(id);
        System.out.println(manga.get().getAuthor_id());
        return homeServices.getMangaById(id);
    }

    @GetMapping("/getmangaid")
    public Manga getManga(Integer id) {
        id = 1;
        return homeServices.getMangaId(id);
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
