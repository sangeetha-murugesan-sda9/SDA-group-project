package backend.user;

import backend.auth.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    UserRepository userRepository;
    UserService userService;
    AuthService authService;

    @Autowired
    public UserController(UserRepository userRepository, UserService userService, AuthService authService) {
        this.userRepository = userRepository;
        this.userService = userService;
        this.authService = authService;
    }


    //change current username
    @PutMapping("/current-user")
    public ResponseEntity<User> updateName(@RequestBody String newUsername) {
        String email = authService.getLoggedInUserEmail(); // get current user email
        User user = userRepository.findByEmail(email); // find the user by email

        user.setUsername(newUsername);
        userRepository.save(user);

        return ResponseEntity.ok(user);
    }

    //change current user instagram
    @PutMapping("/current-instagram")
    public ResponseEntity<User> updateInstagram(@RequestBody String newInstagram) {
        String email = authService.getLoggedInUserEmail(); // get current user email
        User user = userRepository.findByEmail(email); // find the user by email

        user.setInstagram(newInstagram);
        userRepository.save(user);

        return ResponseEntity.ok(user);
    }





    // get current user
    @GetMapping("/current-user")
    public ResponseEntity<User> getCurrentUser() {

        String email = authService.getLoggedInUserEmail(); // get current user email
        User user = userRepository.findByEmail(email); // find the user by email

        return ResponseEntity.ok(user);
    }

    // get all users
    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {

        List<User> users = userRepository.findAll();

        return ResponseEntity.ok(users);
    }



}
