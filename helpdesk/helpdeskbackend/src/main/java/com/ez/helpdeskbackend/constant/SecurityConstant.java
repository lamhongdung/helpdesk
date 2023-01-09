package com.ez.helpdeskbackend.constant;

public class SecurityConstant {

    public  static final long EXPIRATION_TIME = 432_000_000;// 5 days in ms
    public  static final String TOKEN_PREFIX = "Bearer";
    public  static final String JWT_TOKEN_HEADER = "Jwt-Token";
    public  static final String TOKEN_CANNOT_BE_VERIFIED = "Token cannot be verified";
    public  static final String HELP_DESK = "Help desk";
    public  static final String HELP_DESK_ADMINISTRATION = "User Management Portal";
    public  static final String AUTHORITIES = "authorities";
    public  static final String FORBIDDEN_MESSAGE = "You need to login to access this page";
    public  static final String ACCESS_DENIED_MESSAGE = "You do not have permission to access this page";
    public  static final String OPTIONS_HTTP_METHOD = "Options";
    public  static final String[] PUBLIC_URLS = {"/user/login", "/user/signup", "/user/reset-password/**"};


}
