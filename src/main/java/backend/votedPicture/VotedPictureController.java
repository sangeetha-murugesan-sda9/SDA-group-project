package backend.votedPicture;

import backend.auth.AuthService;
import backend.comment.Comment;
import backend.comment.CommentRepository;
import backend.picture.Picture;
import backend.picture.PictureRepository;
import backend.user.ResourceNotFoundException;
import backend.user.User;
import backend.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
public class VotedPictureController {

    PictureRepository pictureRepository;
    UserRepository userRepository;
    AuthService authService;
    VotedPictureRepository votedPictureRepository;

    @Autowired
    public VotedPictureController(PictureRepository pictureRepository, UserRepository userRepository, AuthService authService, VotedPictureRepository votedPictureRepository) {
        this.pictureRepository = pictureRepository;
        this.userRepository = userRepository;
        this.authService = authService;
        this.votedPictureRepository = votedPictureRepository;
    }




 // add a pictureID voted by current to the list of voted pictures.
    @PostMapping("/voted/{pictureId}")
    public ResponseEntity<VotedPicture> addVoteToPictureById(@PathVariable long pictureId) {


        String email = authService.getLoggedInUserEmail(); // find the current user email
        User user = userRepository.findByEmail(email); // find the user by email

        VotedPicture votedPicture = new VotedPicture();

        votedPicture.setPictureIdVoted(pictureId);


        votedPicture.setVoter(user); // add the user to the voted pic
        user.getVotedPictures().add(votedPicture);// add the pic to list of voted pictures by user

        userRepository.save(user);
        votedPictureRepository.save(votedPicture);

        return ResponseEntity.status(HttpStatus.CREATED).body(votedPicture);
    }



    //get list of pics voted by current user
    @GetMapping("/voted")
    public ResponseEntity<List<VotedPicture>> getVotedPics() {

        String email = authService.getLoggedInUserEmail(); // find the current user email
        User user = userRepository.findByEmail(email); // find the user by email

        List<VotedPicture> votedPictures = user.getVotedPictures();// get the list of pics voted by current user

        return ResponseEntity.ok(votedPictures);
    }



}




