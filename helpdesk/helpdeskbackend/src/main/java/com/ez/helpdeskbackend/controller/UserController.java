package com.ez.helpdeskbackend.controller;

import com.ez.helpdeskbackend.entity.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/user")
public class UserController {

    @GetMapping("/home")
    public String showUser(){
        return  "application works";
    }
}
