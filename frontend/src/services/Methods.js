

class Methods {

  getEmailById(array, userId) {
    const data = array[userId-1].email;    
    return data;

    //return array[userId].email;
  }

  // getting a username providing email
 getUsernameByEmail(array,userMail){

   var user = array.filter(function (item){
return item.email === userMail
   })      
   return user[0].username

}


  // getting avatar providing email
  getAvatarByEmail(array,userMail){

    var user = array.filter(function (item){
 return item.email === userMail
    })      
    return user[0].avatar
 
 }



// get total Likes by user email//

getTotalLikesByEmail(array, userMail ){
  var user = array.filter(function (item){
    return item.email === userMail
       })  
var likes = user[0].pictures.map(i => i.likes);
var sum = likes.reduce((a, b) => a + b, 0)

return sum
};


// get total dilLikes by user email//

getTotalDislikesByEmail(array, userMail ){
  var user = array.filter(function (item){
    return item.email === userMail
       })  
var dislikes = user[0].pictures.map(i => i.dislikes);
var sum = dislikes.reduce((a, b) => a + b, 0)

return sum
};

// get all pictures JSON by user email//

getPicturesByEmail(array, userMail ){
  var user = array.filter(function (item){
    return item.email === userMail
       })  
var pics = user.map(i => i.pictures);
/* var urls = pics[0].map(i => i.url); */

return pics
};


/*
getDislikes (arrayOfPictures , pictureId);
getTimestamp(arrayOfPictures , pictureId)  -> formated DD-MM HH:mm
*/




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
