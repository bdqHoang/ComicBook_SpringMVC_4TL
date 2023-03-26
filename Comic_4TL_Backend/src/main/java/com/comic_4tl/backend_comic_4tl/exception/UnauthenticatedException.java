package com.comic_4tl.backend_comic_4tl.exception;

public class UnauthenticatedException extends RuntimeException{
    public UnauthenticatedException(String message) {
        super(message);
    }
}
