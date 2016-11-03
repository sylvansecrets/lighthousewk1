
numDict = function letterGen(){
  var begin = "A".charCodeAt();
  var end = "Z".charCodeAt();
  var dict = {};
  var letter = begin;
  for (var i = 2; i <= 9; i += 1){
    counter = 0;
    str = [];
    // 7 and 9 have 4 characters instead of 3
    if (i == 7 || i == 9){
      cond = 3;
    } else {
      cond = 2;
    }
    // push either the next 3 or 4 letters
    for (var j = 0; j <= cond; j += 1){
      str.push(String.fromCharCode(letter));
      letter += 1;
    }
    // set dictionary entry
    dict[i] = str;
  }
  return dict;
}

phoneDict = numDict()

function allWords(num){
  // Strip all non numerics
  num = num.replace(/\D/, "");
  numList = num.split("").map(Number);
  var prevList = [];
  var nextList = [];
  // Loop over each number
  for (n of numList){
    matched = phoneDict[n];
    if (matched) {
      // reset nextList only if the next letter is valid
      nextList = [];
      // push initial letters when prevList is empty
      if (prevList.length == 0){
        for (letter of matched){
          nextList.push([letter]);
      }
    } else {
      // iterate over prevList to push to nextList
      for (arr of prevList){
        for (letter of matched){
          newList = arr.slice(0)
          newList.push(letter);
          nextList.push(newList);
        }
      }
    }
    prevList = nextList.slice(0);
    }
  }
  wordList = []
  nextList.forEach(function(w){
    wordList.push(w.join(""))
  })
  return wordList;
}


input = process.argv.slice(2);
if (input){
  input = input.join("");
  console.log(allWords(input));
}