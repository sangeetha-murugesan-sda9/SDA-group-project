package backend.picture;

import backend.auth.AuthService;
import backend.user.ResourceNotFoundException;
import backend.user.User;
import backend.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.sql.Timestamp;

@RestController
public class PictureController {


    UserRepository userRepository;
    PictureRepository pictureRepository;
    AuthService authService;

    @Autowired
    public PictureController(UserRepository userRepository, PictureRepository pictureRepository, AuthService authService) {
        this.userRepository = userRepository;
        this.pictureRepository = pictureRepository;
        this.authService = authService;
    }

    // post a picture to the current user by just providing the url
    @PostMapping("/picture-url")
    public ResponseEntity<Picture> addPicture(@RequestBody String url) {

        String email = authService.getLoggedInUserEmail(); // get current user email
        User user = userRepository.findByEmail(email); // find the user by email

        Picture picture = new Picture(url); // instantiate a new picture
        Timestamp timestamp = new Timestamp(System.currentTimeMillis()); // get the timestamp

        picture.setTimestamp(timestamp); // set timestamp to the picture

        picture.setOwner(user); // set current user as owner
        user.getPictures().add(picture); // add picture to the list of pictures owned by the user

        pictureRepository.save(picture);
        userRepository.save(user);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(picture);
    }


    // post a picture to the current user
    @PostMapping("/picture")
    public ResponseEntity<Picture> addPicture(@RequestBody Picture picture) {

        String email = authService.getLoggedInUserEmail(); // get current user email
        User user = userRepository.findByEmail(email); // find the user by email

        picture.setOwner(user); // set current user as owner
        user.getPictures().add(picture); // add picture to the list of pictures owned by the user

        pictureRepository.save(picture);
        userRepository.save(user);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(picture);
    }


    // post a picture by userId by just providing url
    @PostMapping("/picture-url/{userId}")
    public ResponseEntity<Picture> addPictureById(@RequestBody String url, @PathVariable long userId) {

        User user = userRepository.findById(userId).orElseThrow(ResourceNotFoundException::new);; // find the user by ID

        Picture picture = new Picture(url); // instantiate a new picture

        picture.setOwner(user); // set current user as owner
        user.getPictures().add(picture); // add picture to the list of pictures owned by the user

        pictureRepository.save(picture);
        userRepository.save(user);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(picture);
    }



    // post a picture by userId
    @PostMapping("/picture/{userId}")
    public ResponseEntity<Picture> addPictureById(@RequestBody Picture picture, @PathVariable long userId) {

        User user = userRepository.findById(userId).orElseThrow(ResourceNotFoundException::new);; // find the user by ID

        picture.setOwner(user); // set current user as owner
        user.getPictures().add(picture); // add picture to the list of pictures owned by the user

        pictureRepository.save(picture);
        userRepository.save(user);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(picture);
    }







    //add a like to a picture and increment vote for the current user
    @PostMapping("/likes/{pictureId}")
    public ResponseEntity<Picture> addLike(@PathVariable Long pictureId) {

        Picture picture  = pictureRepository.findById(pictureId).orElseThrow(ResourceNotFoundException::new); // find the picture
        int count = picture.getLikes() + 1;
        picture.setLikes(count);

        String email = authService.getLoggedInUserEmail(); // get current user email
        User user = userRepository.findByEmail(email); // find the user by email

        int voteCount = user.getVotes() +1 ;
        user.setVotes(voteCount);

        pictureRepository.save(picture);
        userRepository.save(user);

        return ResponseEntity.ok(picture);
    }

    //add a dislike to a picture and increment vote for the current user
    @PostMapping("/dislikes/{pictureId}")
    public ResponseEntity<Picture> addDislike(@PathVariable Long pictureId) {

        Picture picture  = pictureRepository.findById(pictureId).orElseThrow(ResourceNotFoundException::new); // find the picture
        int count = picture.getDislikes() + 1;
        picture.setDislikes(count);

        String email = authService.getLoggedInUserEmail(); // get current user email
        User user = userRepository.findByEmail(email); // find the user by email

        int voteCount = user.getVotes() +1 ;
        user.setVotes(voteCount);


        pictureRepository.save(picture);
        return ResponseEntity.ok(picture);
    }


    // update current user Avatar
    @PutMapping("/avatar-url")
    public ResponseEntity<User> updateAvatar(@RequestBody String url) {

        String email = authService.getLoggedInUserEmail(); // get current user email
        User user = userRepository.findByEmail(email); // find the user by email

        user.setAvatar(url); // setting the new URL

        userRepository.save(user);

        return ResponseEntity.ok(user);

    }



    // delete Picture by Id

    @DeleteMapping("/picture/{pictureId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletePicture(@PathVariable Long pictureId) {
        Picture picture = pictureRepository.findById(pictureId).orElseThrow(ResourceNotFoundException::new);;
        pictureRepository.delete(picture);
    }


    //upload a picture by userId

    @PostMapping("/upload/{userId}")
    public java.lang.String uploadPictureByUserId(@RequestParam("imageFile")MultipartFile imageFile, @PathVariable String userId){
    //specimenService.saveImage(imageFile);

        return "";

    }




}
