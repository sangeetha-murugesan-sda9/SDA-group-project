

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


  // getting avatar by email
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

getMaxLikes(array){
const picsArray = array.map(i=> i.pictures)
const pics = picsArray.flat()
const likes = pics.map(i=> i.likes)
const maxValue = Math.max.apply(Math, likes);

return maxValue;

}



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




}









export default new Methods();
