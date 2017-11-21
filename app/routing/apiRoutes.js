var friendsArray=require("../data/friends")
var path = require('path');

module.exports = function(app) {

app.get("/api/friends", function(req,res){
    res.json(friendsArray);
//   This will be used to display a JSON of all possible friends.
});
app.post("/api/friends", function(req, res){
//This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.        
        
var newFriendScores = req.body.scores;
    console.log(req.body);
var scoresArray= [];
var bestMatch = 0;

for(var i=0; i<friendsArray.length; i++){            
 var scoresDiff = 0;
    console.log(newFriendScores);
        
      for(j=0; j< newFriendScores.length; j++){
           scoresDiff += Math.abs(newFriendScores[j]- friendsArray[i].scores[j]);
          
      }
      console.log(scoresDiff);
     
      scoresArray.push(scoresDiff);
};

for(var i=0; i<scoresArray.length; i++){
      if(scoresArray[i] <= scoresArray[bestMatch]){
        bestMatch = i;
      }
}

    var bff = friendsArray[bestMatch];
    res.json(bff);


    friendsArray.push(req.body);
});
    
}