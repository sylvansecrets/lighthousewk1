
function square_code(str){
  noSpace = str.toLowerCase().split("").filter(function(c){
    return(c.match(/[a-z]/))
  })
  return(noSpace);
}
console.log(square_code("This is a sentence."));