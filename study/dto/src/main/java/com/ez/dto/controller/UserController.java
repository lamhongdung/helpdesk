package com.ez.dto.controller;

import com.ez.dto.dto.UserLocationDTO;
import com.ez.dto.entity.User;
import com.ez.dto.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController

@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;

//    @Autowired
//    private ModelMapper modelMapper;

    @GetMapping("/users-location")
    public List<UserLocationDTO> getAllUsersLocation() {
        return userService.getAllUsersLocation();
    }

}
