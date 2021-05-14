
class Methods {


  getUserById(array, userId) {

    var user = array.filter(function (item){

      return item.id === userId
         })
         
         return  user[0]

  }





  getEmailById(array, userId) {
    const data = array[userId-1].email;    
    return data;

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
  
if (array.length <0){

  return [-1,-1]
}

    var maxValue = this.getMaxLikes(array)    
    
    let winnerId = -1;
    let winnerImgId = -1;

    for (let i = 0; i < array.length; i++) {
  
      for (let j = 0; j < array[i].pictures.length; j++) {
      
        if (array[i].pictures[j].likes === maxValue){         
         
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
    "url":"https://i.imgur.com/8ID6mVu.jpg"
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
  }, 
  {
   "id": 6,
   "url":"https://images.sk-static.com/images/media/profile_images/artists/9946864/huge_avatar"
 }
 , 
 {
  "id": 7,
  "url":"https://lastfm.freetls.fastly.net/i/u/770x0/47898ecb10f2f9048f6406b9de31d4fa.jpg"
}
, 
{
 "id": 8,
 "url":"https://ballzy.eu/pub/media/mageplaza/blog/post/h/8/h8p_twlw.jpeg"
}
, 
   {
    "id": 9,
    "url":"https://images.squarespace-cdn.com/content/v1/5e4c3329fd8eab01426e960c/1611318911249-5O4IG27IPTWIPF3QYBJA/ke17ZwdGBToddI8pDm48kLIj3bb_uLOihttx7hjsPSV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0lqfkVpRp1g_2L-WsTQRP4IUeQvxhQLxDj0GQzUQT21mzi2feheXFTkax-QWHoTYtA/20200923-IMG_7473.jpg"
  }
   
   


     

]

const randomIndex = Math.floor(Math.random() * urls.length);
const randomPic = urls[randomIndex];


return randomPic.url

}


}











export default new Methods();
