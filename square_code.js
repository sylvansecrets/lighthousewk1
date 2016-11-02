
function square_code(str){
  if (typeof(str)!=="String"){
    str = str.join("")
  }
  noSpace = str.toLowerCase().split("").filter(function(c){
    return(c.match(/[a-z]/));
  })
  var l = noSpace.length;
  var side = Math.floor(Math.sqrt(l));
  var sides = [side,side];
  while (sides[0]*sides[1]<l){
    if (sides[0] < sides[1]){
      sides[0] += 1;
    } else {
      sides[1] += 1;
    }
  }
  var output = []
  for (var i=0; i<sides[1]; i+=1){
    output.push([]);
  }


  noSpace.forEach(function(c,i){
    output[Math.floor(i%sides[0])].push(c);
  })

  strOutput = []

  output.forEach(function(c){
    strOutput.push(c.join(""));
  })
  return strOutput;
}


if (input){
  console.log(square_code(input));
}