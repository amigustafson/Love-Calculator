//Store input names in variables and get them correctly spelled





function submitNames(){
  var name1 = document.getElementById("userInput1").value;
  var name2 = document.getElementById("userInput2").value;

  function spelling(name){
      var firstLetter = name.slice(0,1);
      var restOfLetters = name.slice(1);

      var firstLetter = firstLetter.toUpperCase();
      var restOfLetters = restOfLetters.toLowerCase();

      return correctlySpelledName = (firstLetter + restOfLetters);
  }

  var userName = spelling(name1);
  var interestName = spelling(name2);

  var n = Math.random();
  n = n * 100;
  n = Math.floor(n) + 1;

  if (n > 80){
      document.querySelector(".results").innerHTML = "I can't believe it " + userName + "! Your love score with " + interestName + " is " + n + "%! It is meant to be!!";
  }

  else if (n > 40 && n <= 75){
      document.querySelector(".results").innerHTML = userName + ", your love score with " + interestName + " is " + n + "%. You stand a good chance at making it!";
  }

  else {
      document.querySelector(".results").innerHTML = "I'm sorry " + userName + ", your love score with " + interestName + " is only " + n + "%. Perhaps you should wait with deleting you tinder-account.";
  }


}







//Return a personalized message with love percentage and their names correctly spelled

/*function getname(){
  var input = document.querySelector(".name-input").value;
}
*/
