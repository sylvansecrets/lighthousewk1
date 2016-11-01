function positionLetters(sentence){
  var letters = sentence
  var occurence = {}
  var validSubset = /[a-z]/i

  for (var i = 0; i < letters.length; i++)
    update(letters[i], i)

  function update (l, k){
    if (l.match(validSubset)){
      if (occurence[l]===undefined){
        occurence[l] = [k];
      } else {
        occurence[l].push(k);
      }
    }
  }
  return(occurence);
}

console.log(positionLetters("lighthouse in the house"))