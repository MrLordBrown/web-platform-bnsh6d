const map = [
  ['a', 'b', 'c', 'd', 'e'],
  ['b', 'd', 'e', 'f', 'g'],
  ['a', 'a', 'a', 'a', 'b'],
  ['g', 'd', 'f', 'g', 'd'],
  ['g', 'h', 'k', 'l', 'd'],
];

const texty = {
  a: 'old town',
  b: 'market',
  c: 'police',
  d: 'fire',
  e: 'apartments',
  f: 'house',
  g: 'hospital',
  h: 'theatre',
  k: 'bar',
  l: 'parking',
};
var x = 2;
var y = 2;
var charLoc = map[y][x];

var north = document.getElementById('n').innerHTML;
var south = document.getElementById('s').innerHTML;
var east = document.getElementById('e').innerHTML;
var west = document.getElementById('w').innerHTML;
var northwest = document.getElementById('nw').innerHTML;
var northeast = document.getElementById('ne').innerHTML;

var read = document.getElementById('reader');

console.log(charLoc);

function init() {
  north = map[y - 1][x];
  console.log(map[y - 1][x]);
  south = map[y + 1][x];
  console.log(map[y + 1][x]);
  east = map[y][x + 1];
  console.log(map[y][x + 1])
  west = map[y][x + 1];
  northwest = map[y - 1][x - 1];
  northeast = map[y - 1][x + 1];
  read.innerHTML = 'a';
  console.log(read);
  console.log(read);
}
function getCommand(event) {
  var key = event.keyCode;
  var cmd = document.getElementById('command').value;

  if (key == 13) {
    switch (cmd) {
      case n:
        charLoc = map[y + 1][x];
    }
  }
}
