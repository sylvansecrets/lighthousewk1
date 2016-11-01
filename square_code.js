
function square_code(str){
  noSpace = str.toLowerCase().split("").filter(function(c){
    return(c.match(/[a-z]/));
  })
  l = noSpace.length;
  l = 82;
  side = Math.floor(Math.sqrt(l));
  sides = [side,side];
  if (sides[0]*sides[1]<l){
    if (sides[0] < sides[1]){
      sides[0] += 1;
    } else {
      sides[1] += 1;
    }
  }

}
