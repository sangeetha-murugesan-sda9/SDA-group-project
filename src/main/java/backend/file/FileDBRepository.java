package backend.file;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Dictionary;
import java.util.List;
import java.util.Optional;

@Repository
    public interface FileDBRepository extends JpaRepository<FileDB, Long> {


/*
    static Optional<FileDB> findById(Long id) {
        return null;
    }*/
}


