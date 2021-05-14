
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



// getting votes count providing email
getVotesByEmail(array,userMail){

  var user = array.filter(function (item){
return item.email === userMail
  })      
if(user[0] === undefined){
  return 0
}

  return user[0].votes

}


// getting number of pics of the user by email
  getNumberOfPicturesByEmail(array,userMail){

    var user = array.filter(function (item){
 return item.email === userMail
    })    
    

    if(user[0] === undefined){
      return 0
    }
    
    return user[0].pictures.length
 
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

// get total disLikes by user email//

getTotalDislikesByEmail(array, userMail ){
  var user = array.filter(function (item){
    return item.email === userMail
       })  
var dislikes = user[0].pictures.map(i => i.dislikes);
var sum = dislikes.reduce((a, b) => a + b, 0)

return sum
};

// get all pictures JSON by user email//

getPicturesByEmail(array, userMail){
  var user = array.filter(function (item){
    return item.email === userMail
       })  
var pics = user.map(i => i.pictures);
/* var urls = pics[0].map(i => i.url); */

return pics
};

// get the max value of likes of the all JSON 
getMaxLikes(array){
const picsArray = array.map(i=> i.pictures)
const pics = picsArray.flat()
const likes = pics.map(i=> i.likes)
const maxValue = Math.max.apply(Math, likes);

return maxValue;

}

// get the winner and the winner picture of the all JSON
// -> return an array [ winningUserId , winningPictureId ]
  
getWinner(array){
  
    var maxValue = this.getMaxLikes(array)
    //console.log(maxValue);
    
    let winnerId = -1;
    let winnerImgId = -1;

    for (let i = 0; i < array.length; i++) {
  
      for (let j = 0; j < array[i].pictures.length; j++) {
      
        if (array[i].pictures[j].likes === maxValue){
          
          //console.log("image ",j);
          winnerId = i;
          winnerImgId = j;
        }
      }
    }

    return [winnerId,winnerImgId]
    }


// randomize order of an an array 
  randomArrayShuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }





//randomize a picture
getRandompictureUrl(){ 
const urls = [
  {
    "id": 1,
    "url":"https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8xOTQyNjYyOS9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY0NDMwNjY0MX0.znA1_ppgekiw8cjYjIx5iVLugURwh3l4LeN-Aw5SGiI/img.jpg?width=1200&coordinates=0%2C489%2C0%2C2511&height=600"
  }
   , 
   {
    "id": 2,
    "url":"https://www.dummymag.com/wp-content/uploads/2020/04/1TOMM%C2%A5_%E2%82%ACAH_author_Kertin_Vasser-450x600.jpg"
  }
   , 
   {
    "id":3,
    "url":"https://static.wikia.nocookie.net/nvsc/images/2/20/1012484-800wtommt.jpg/revision/latest?cb=20200227171259"
  }
   , 
  {
    "id": 4,
    "url":"https://chords.cloud/images/artists/640/tommy-cash.jpg"
  }
   , 
   {
    "id": 5,
    "url":"https://photos.bandsintown.com/thumb/9618572.jpeg"
  }
   
     

]

const randomIndex = Math.floor(Math.random() * urls.length);
const randomPic = urls[randomIndex];


return randomPic.url

}


}











export default new Methods();
