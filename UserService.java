package com.careerconnect.service;

import com.careerconnect.dto.LoginRequest;
import com.careerconnect.dto.LoginResponse;
import com.careerconnect.entity.User;
import com.careerconnect.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository repository;

    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    public User register(User user) {
        return repository.save(user);
    }

    public List<User> getAllUsers() {
        return repository.findAll();
    }

    public User getUserById(Integer id) {
        return repository.findById(id).orElse(null);
    }

    public LoginResponse login(LoginRequest request) {

        User user = repository.findByEmail(request.getEmail()).orElse(null);

        if (user == null) {
            return new LoginResponse("Invalid Email", null, null);
        }

        if (!user.getPassword().equals(request.getPassword())) {
            return new LoginResponse("Invalid Password", null, null);
        }

        return new LoginResponse(
                "Login Successful",
                user.getRole(),
                user.getFullName()
        );
    }
}