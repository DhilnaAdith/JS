
//variable-used to store data
//  creating/declaring variable
// syntax:
// variable-name = Value;
// var/const/let
// var i=10 var means globALY SCOPE
// LET MEANS SCOPE IS INSIDE WHERE IS DECLARED
// ?const means its constant throughout program
var i =10
console.log("i (before loop) ="+i)

for(let i=0;i<5;i++)
{
  console.log("i inside loop ="+ i)  
}
console.log("i (after loop) ="+ i)  

// i=0, 0<5 true 0, i++=0+1=1 i<5 true 1, i++=2 2<5 true 2 ,i=3 3<5 true 3
    // 1=4 4<5 true 4 , i=5 5<5 false
    
