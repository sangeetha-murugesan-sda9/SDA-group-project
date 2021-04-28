package backend.dislike;

import backend.file.FileDB;
import backend.file.FileDBRepository;
import backend.likes.Likes;
import backend.user.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:8080")
public class DisLikeController {

    DisLikeRepository disLikeRepository;
    FileDBRepository fileDBRepository;

    @Autowired
    public DisLikeController(DisLikeRepository disLikeRepository, FileDBRepository fileDBRepository) {
        this.disLikeRepository= disLikeRepository;
        this.fileDBRepository = fileDBRepository;
    }

    @GetMapping("/disLike/{id}/disLikes")
    public ResponseEntity<List<DisLike>> listAllDislikes(@PathVariable String id) {
        return ResponseEntity.ok(disLikeRepository.findAll());
    }

    @PostMapping("/disLike/{id}/disLikes")
    public ResponseEntity<DisLike> createDisLikeOnFile(@PathVariable Long id, @Valid @RequestBody DisLike disLike) {
        FileDB fileDB = fileDBRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
        disLike.setFileDB(fileDB);
        return ResponseEntity.ok(disLikeRepository.save(disLike));
    }
}

