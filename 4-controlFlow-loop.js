//for loop
for(var counter=1; counter<5; counter++){
  console.log("inside the loop"+counter)
}
console.log('outside the loop:'+counter);


//nested loop
for( var i=0; i<5; i++){
  console.log("outer loop at state"+i);
  for(var p=0; p<2; p++){
    console.log("inner loop at state: "+p);
    if(p==1){
      console.log("\n");
    }
  }
}

//While Loop
var count = 1;
while(count < 5){
  console.log(count);
  count +=2;
}
​
console.log();
​
//break
for(var i=1; i<10; i++){
  if(i%3 ==0){
    break;
  }
}
console.log(i);




//Continue
​
var start = 2 ;
var sum = 0;
​
do{
  if(start % 2 == 0){
    continue;
  }
  sum+=start;
}while(++start <= 10);
​
console.log(sum);
