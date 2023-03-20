package com.comic_4tl.backend_comic_4tl.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.comic_4tl.backend_comic_4tl.model.User;
import com.comic_4tl.backend_comic_4tl.services.UserServices;

@RestController
public class HomeController {
    @Autowired
    private UserServices userServices;

    @GetMapping("/home")
    public User home() {

        return userServices.findByUsername("bdqhoang");
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
