package backend.votedPicture;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VotedPictureRepository extends JpaRepository<VotedPicture, Long>  {
}
