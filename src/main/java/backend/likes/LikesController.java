package backend.likes;

import backend.file.FileDB;
import backend.file.FileDBRepository;
import backend.user.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:8080")
 public class  LikesController{

        LikesRepository likesRepository;
        FileDBRepository fileDBRepository;

        @Autowired
        public LikesController(LikesRepository likesRepository,FileDBRepository fileDBRepository) {
            this.likesRepository= likesRepository;
            this.fileDBRepository = fileDBRepository;
        }

        @GetMapping("/like/{id}/likes")
        public ResponseEntity<List<Likes>> listAlllikes(@PathVariable String id) {
            return ResponseEntity.ok(likesRepository.findAll());
        }

        @PostMapping("/like/{id}/likes")
        public ResponseEntity<Likes> createLikesOnFile(@PathVariable Long id, @RequestBody Likes like) {
            FileDB fileDB = fileDBRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
            like.setFileDB(fileDB);
            return ResponseEntity.ok(likesRepository.save(like));
        }
    }


