$(document).ready(function(event) {
  $("form#puzzle").submit(function(event) {
    event.preventDefault();
    $("#output").show();
    let userInput = $("input#submission").val();
    let userString = userInput.split("");
    console.log(userString);
    const vowels = ["a", "e", "i", "o", "u"];
    for(let i=0; i < userString.length; i += 1)
     if (vowels.includes(userString[i])) {
        userString[i] = "-";
     }
     let answer = userString.join(" ");   
     $("p").text(answer);
  });
 }); 