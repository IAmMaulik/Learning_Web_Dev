const shn = require("superheroes");
const svn = require("supervillains");

var superHeroName = shn.random();
var superVillainName = svn.random();
var randomNo = Math.floor(Math.random()*2)+1;

console.log("Your random Superhero name is: " + superHeroName);
console.log("Your random SuperVillain name is: " + superVillainName);
console.log("\n");
if (randomNo === 1){
    console.log(superHeroName + " wins the fight!\nThe Day is Saved!");
}
else{
    console.log(superVillainName + " wins the fight!\nHumanity loses!");
}