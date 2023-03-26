package com.comic_4tl.backend_comic_4tl.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class RegisterRequest {
    @NotBlank(message = "Tên tài khoản không được để trống")
    @Pattern(regexp = "^[a-zA-Z0-9_]*$", message = "Tên tài khoản không được chứa ký tự đặc biệt")
    private String name;
    @NotBlank(message = "Email không được để trống")
    @Email(message = "Email không đúng định dạng")
    private String email;
    @NotBlank(message = "Mật khẩu không được để trống")
    @Size(min = 8, max = 20, message = "Mật khẩu phải từ 8 đến 20 ký tự")
    private String password;
    private String avatar;

}
