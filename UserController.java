package com.careerconnect.controller;

import com.careerconnect.entity.User;
import com.careerconnect.service.UserService;
import org.springframework.web.bind.annotation.*;
import com.careerconnect.dto.LoginRequest;
import com.careerconnect.dto.LoginResponse;
import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3001")
public class UserController {

    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return service.register(user);
    }
    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {
        return service.login(request);
    }

    @GetMapping
    public List<User> getUsers() {
        return service.getAllUsers();
    }

    @GetMapping("/{id}")
    public User getUser(@PathVariable Integer id) {
        return service.getUserById(id);
    }
}