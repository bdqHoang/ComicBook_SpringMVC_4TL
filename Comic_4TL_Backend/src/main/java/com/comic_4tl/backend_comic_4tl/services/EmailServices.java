package com.comic_4tl.backend_comic_4tl.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

import com.comic_4tl.backend_comic_4tl.model.Email;

@Component
public class EmailServices {

    @Autowired
    private JavaMailSender javaMailSender;

    public String sendSimpleEmail(Email email) {

        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(email.getRecipient());
            message.setSubject(email.getSubject());
            message.setText(email.getMsgBody());

            javaMailSender.send(message);
            return "Email sent successfully";
        } catch (Exception e) {
            e.printStackTrace();
            return "Error while sending email";
        }

    }
}