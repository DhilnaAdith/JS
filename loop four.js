// w a p to print a Pattern
// input    2             3             4
// output   2+22      3+33+333=360     4+44+444+4444=4936
note: variable nte koode string add cheytha string airikkum (Number("22"))=22

var input=3
 var i=1
 var sum=0
 var total=0
 while(i<=input) 
 {
     sum=sum*10+input //3 33 333
     total+=sum //3 36 369
     i++
 }
 console.log(total);

//  method 2
var input=3
 var i=1
 str=""
 sum=0
 while(i<=input) 
 {
    str+=input //"3" "33" "333"
     sum+=Number(str) //sum=3 sum=3+22   str convert into number in js
     //console.log(typeof(str));//2 2
     i++
 }
 console.log(sum);