
/*
  Translates a 1 character-length string via ROT13.
  Rotates any letter by 13 positions, maintaining capitalization.
  Leaves any other number or symbol alone.

  Returns the modified character.
*/
var translateCharacter = function(character) {
  var charCode = character.charCodeAt(0);

  // Lowercase
  if (charCode >= 97 && charCode <= 122) {
    // a-m
    if (charCode < 110) {
      return String.fromCharCode(charCode + 13)
    }
    // n-z
    return String.fromCharCode(charCode - 13)
  }

  // Uppercase
  if (charCode >= 65 && charCode <= 90) {
    // A-M
    if (charCode < 78) {
      return String.fromCharCode(charCode + 13)
    }
    // N-Z
    return String.fromCharCode(charCode - 13)
  }

  // Anything else is a number or symbol. Leave it alone.
  return character;
}

var translateClickHandler = function () {
  //$(".translate").val( $(this).attr("data-name"))
  //var output = $("#displayText")
  var input = $("#inputText").val();

  //var output = $('#displayText')[0].textContent
  //console.log(input)
  var split_up = input.split("")
  for (var i = 0; i < split_up.length; i++) {
    split_up[i] = translateCharacter(split_up[i])
  }
  split_up = split_up.join("")
  $('#displayText').text(split_up) 
  
}

$(".translate").on('click', translateClickHandler)

