let scrabbleValues = new Map();
scrabbleValues.set("A", 1);
scrabbleValues.set("B", 3);
scrabbleValues.set("C", 3);
scrabbleValues.set("D", 2);
scrabbleValues.set("E", 1);
scrabbleValues.set("F", 4);
scrabbleValues.set("G", 2);
scrabbleValues.set("H", 4);
scrabbleValues.set("I", 1);
scrabbleValues.set("J", 8);
scrabbleValues.set("K", 5);
scrabbleValues.set("L", 1);
scrabbleValues.set("M", 3);
scrabbleValues.set("N", 1);
scrabbleValues.set("O", 1);
scrabbleValues.set("P", 3);
scrabbleValues.set("Q", 10);
scrabbleValues.set("R", 1);
scrabbleValues.set("S", 1);
scrabbleValues.set("T", 1);
scrabbleValues.set("U", 1);
scrabbleValues.set("V", 4);
scrabbleValues.set("W", 4);
scrabbleValues.set("X", 8);
scrabbleValues.set("Y", 4);
scrabbleValues.set("Z", 10);

const words =
  "hello,world,this,is,a,functional,programming,tutorial,in,javascript,and,rust";

const getTotalScrabbleScore = words =>
  words
    .split("")
    .filter(letter => letter !== ",")
    .map(letter => letter.toUpperCase())
    .map(letter => scrabbleValues.get(letter))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(getTotalScrabbleScore(words));
