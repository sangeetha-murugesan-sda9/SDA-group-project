

class Methods {

  getEmailById(array, userId) {
    const data = array[userId-1].email;    
    return data;

    //return array[userId].email;
  }

  // getting a user providing email
 getUsernameByEmail(array,userMail){

   var user = array.filter(function (item){
return item.email === userMail
   })      
   return user[0].username

}

  // TODO - implements methods here

  /*
    EASY:
 getPictures( arrayOfUsers , email) that returns only the pictures of a specific "user"
to implement with json mockup provided .

MODERATE:
getLikes (arrayOfPictures , pictureId );
getDislikes (arrayOfPictures , pictureId);
getTimestamp(arrayOfPictures , pictureId)  -> formated DD-MM HH:mm

EASY:
getUser (arrayOfUsers , email);

ADVANCED:
getTotalOfLikes (email);
getTotalOfDislikes (email);

EASY:
getUsername (email);
getInsta (email);  -> returns the instagram with an @ before
getAvatar (email);
*/
}

export default new Methods();
