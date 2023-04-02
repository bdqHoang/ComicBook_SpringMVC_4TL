package com.comic_4tl.backend_comic_4tl.repository;

import com.comic_4tl.backend_comic_4tl.model.Email;

public interface EmailRespository {
    // Method
    // To send a simple email
    String sendSimpleMail(Email details);

    // Method
    // To send an email with attachment
    String sendMailWithAttachment(Email details);
}
