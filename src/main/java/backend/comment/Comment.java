package backend.comment;

import backend.picture.Picture;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name="comment")
public class Comment {


    //fields

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private long id;


    @Column(nullable = false, length=1000)
    @NotBlank
    private String body;

    @ManyToOne
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
    @JsonIdentityReference(alwaysAsId = true)
    @JoinColumn(nullable = false)
    private Picture picture;


    @Column(nullable = false)
    @NotBlank
    private String ownerEmail;

    @Column(nullable = false)
    @NotBlank
    private String ownerName;

    //constructor

    public Comment() {
    }



    // getters and setters


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public Picture getPicture() {
        return picture;
    }

    public void setPicture(Picture picture) {
        this.picture = picture;
    }

    public String getOwnerEmail() {
        return ownerEmail;
    }

    public void setOwnerEmail(String ownerEmail) {
        this.ownerEmail = ownerEmail;
    }

    public String getOwnerName() {
        return ownerName;
    }

    public void setOwnerName(String ownerName) {
        this.ownerName = ownerName;
    }
}
