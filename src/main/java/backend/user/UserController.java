package backend.user;

import backend.auth.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    UserRepository userRepository;
    UserService userService;

    private AuthService authService;

    @Autowired
    public UserController(UserRepository userRepository) {
        this.userRepository= userRepository;
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updateName(@PathVariable Long id, @RequestBody User updatedUser) {
        User user = userRepository.findById(id).orElseThrow(ResourceNotFoundException::new);//find user by id
        user.setName(updatedUser.getName());
        userRepository.save(user);
        return ResponseEntity.ok(user);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = userRepository.findById(id).orElseThrow(ResourceNotFoundException::new);//find user by id
        return ResponseEntity.ok(user);
    }
}
