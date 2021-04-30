package backend.user;

import backend.auth.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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
    public ResponseEntity<User> updateName(@PathVariable Long id, @RequestBody User updatedName) {
        userRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
        updatedName.setId(id);
        User user = userRepository.save(updatedName);
        return ResponseEntity.ok(updatedName);
    }
}
