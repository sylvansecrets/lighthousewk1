morse_cipher = "\
A .-,\
B -...,\
C -.-.,\
D -..,\
E .,\
F ..-.,\
G --.,\
H ....,\
I ..,\
J .---,\
K -.-,\
L .-..,\
M --,\
N -.,\
O ---,\
P .--.,\
Q --.-,\
R .-.,\
S ...,\
T -,\
U ..-,\
V ...-,\
W .--,\
X -..-,\
Y -.--,\
Z --..,\
0 -----,\
1 .----,\
2 ..---,\
3 ...--,\
4 ....-,\
5 .....,\
6 -....,\
7 --...,\
8 ---..,\
9 ----."

function morseTranslator(str){
  if (typeof(str)!=="String"){
    str = str.join(" ")
  }
  output = [];
  input = str.split("");
  cipher = morse_cipher.split(",")
  dict = {};
  cipher.forEach(function(p){
    pair = p.split(" ");
    dict[pair[0]] = pair[1];
  })
  input.forEach(function(c){
    val = dict[c.toUpperCase()];
    if (val){
      output.push(val+" ");
    } else if (c===" "){
      output.push("/")
    }
  })
  strOutput = output.join("");
  return strOutput;

}

input = process.argv.slice(2);
if (input){
  console.log(morseTranslator(input));
}
