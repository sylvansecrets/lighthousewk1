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
  output = [];
  input = str.split("");
  cipher = morse_cipher.split(",")
  dict = {};
  cipher.forEach(function(p){
    pair = p.split(" ");
    dict[pair[0]] = pair[1];
  })

}

