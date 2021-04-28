/*
package backend.likes;

import backend.file.FileDB;
import backend.file.FileDBRepository;
import backend.user.User;
import org.springframework.stereotype.Service;

@Service
public class LikeService {
    //some fields and methods...

    public void createLike(int postId, User authenticatedUser) {
        FileDB fileDB = FileDBRepository.getOne(postId);
        fileDB.getLikes().add(authenticatedUser);
        this.update(FileDB);
    }
}*/
