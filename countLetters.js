function countLetters(sentence){
  var letters = sentence.toLowerCase().split("")
  var occurence = {}
  var validSubset = /[a-z]/

  letters.forEach(update)

  function update (l){
    if (l.match(validSubset)){
      if (occurence[l]===undefined){
        occurence[l] = 1;
      } else {
        occurence[l] += 1;
      }
    }
  }
  return(occurence);
}

console.log(countLetters("lighthouse in the house"))