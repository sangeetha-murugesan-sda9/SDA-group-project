package backend.dislike;

import backend.likes.Likes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DisLikeRepository extends JpaRepository<DisLike, Long> {

}