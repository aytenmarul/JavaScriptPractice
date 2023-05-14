function add(a,b){
  console.log('Total is:'+(a+b));
}
add(10,20);
function multiply(a,b){
  return(a*b);
}
console.log(multiply(10,20));
add(4,5);
add(10,20,30);
add(4);
//
// function addTen(a){
//   return(a+10);
// }
// function addTen(a,b){
//   return(a+b+10);
// }
var add2=add;
add2(100,300);
function sum(a,b){
  return a+b;
}

function average(a,b,fn){
  return fn(a,b)/2;
}
var res=average (10,20,sum);
console.log(res);

function cmToIn(lenght){
  return lenght/2.54
}

function inToCm(lenght){
  return lenght*2.54;
}

function convert(fn,lenght){
  return fn(lenght);
}

var inches=convert(cmToIn,10);
var cm=convert(inToCm,10);
