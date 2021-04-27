package backend.file;

import backend.user.User;

import javax.persistence.*;

@Entity
@Table(name = "files")
public class FileDB {

        @Id
        @GeneratedValue(strategy = GenerationType.SEQUENCE)
        @Column(name = "id")
        private long id;

        private String name;

        private String type;

    @OneToOne(targetEntity= User.class,cascade=CascadeType.ALL)
       private User fileOwner;


    public User getFileOwner() {
        return fileOwner;
    }

    public void setFileOwner(User fileOwner) {
        this.fileOwner = fileOwner;
    }

    @Lob
        private byte[] data;

        public FileDB() {
        }

        public FileDB(String name, String type, byte[] data) {
            this.name = name;
            this.type = type;
            this.data = data;
        }

    public Long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getType() {
            return type;
        }

        public void setType(String type) {
            this.type = type;
        }

        public byte[] getData() {
            return data;
        }

        public void setData(byte[] data) {
            this.data = data;
        }


    }



