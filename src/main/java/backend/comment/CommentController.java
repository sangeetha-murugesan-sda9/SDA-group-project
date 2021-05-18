package backend.comment;

import backend.auth.AuthService;
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
    public class CommentController {

        PictureRepository pictureRepository;
        UserRepository userRepository;
        AuthService authService;
        CommentRepository commentRepository;

        @Autowired
        public CommentController(PictureRepository pictureRepository, UserRepository userRepository, AuthService authService, CommentRepository commentRepository) {
            this.pictureRepository = pictureRepository;
            this.userRepository = userRepository;
            this.authService = authService;
            this.commentRepository = commentRepository;
        }



     // add comment to picture by Id - owner = current user
        @PostMapping("/picture/{pictureId}/comment")
        public ResponseEntity<Comment> createComment(@Valid @RequestBody String body, @PathVariable long pictureId) {


            Picture picture  = pictureRepository.findById(pictureId).orElseThrow(ResourceNotFoundException::new); // find the picture
            String email = authService.getLoggedInUserEmail(); // find the current user email
            User user = userRepository.findByEmail(email); // find the user by email

            String username = user.getUsername();


            Comment comment = new Comment(); // create a comment
            comment.setOwnerEmail(email);// setting email of the current user
            comment.setPicture(picture);// setting the picture associated to the comment
            comment.setBody(body);// setting the body (text)  to the comment
            comment.setOwnerName(username);

            picture.getComments().add(comment); // adding the comment to the list of comments

            commentRepository.save(comment); // saving the comment
            pictureRepository.save(picture);// saving the picture

            return ResponseEntity.status(HttpStatus.CREATED).body(comment);
        }



        //get comments of a picture by Id
        @GetMapping("/comments/{pictureId}")
        public ResponseEntity<List<Comment>> getCommentsByPictureId(@PathVariable Long pictureId) {

            Picture picture  = pictureRepository.findById(pictureId).orElseThrow(ResourceNotFoundException::new); // find the picture
            List<Comment> comments = picture.getComments(); // get the list of comments

            return ResponseEntity.ok(comments);
        }


        //get all comments
        @GetMapping("/comments")
        public ResponseEntity<List<Comment>> getAllComments() {
            List<Comment> comments = commentRepository.findAll();
            return ResponseEntity.ok(comments );
        }


        //delete a comment by his ID
        @DeleteMapping("/comments/{commentId}")
        @ResponseStatus(HttpStatus.NO_CONTENT)
        public void deleteComment(@PathVariable Long commentId) {
            Comment comment = commentRepository.findById(commentId).orElseThrow(ResourceNotFoundException::new);
            commentRepository.delete(comment);
        }


/*
        //update a comment to a specific comment by his ID
        @PutMapping("/comments/{commentId}")
        public ResponseEntity<VotedPicture> updateComment(@PathVariable Long commentId, @RequestBody VotedPicture updatedComment) {
            VotedPicture comment = commentService.updateComment(commentId, updatedComment);
            return ResponseEntity.ok(comment);
        }


 */

    }




