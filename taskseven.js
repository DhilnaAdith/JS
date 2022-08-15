// w.a.p to print sum of numbers from 1 to 20
var i = 1
var sum=0
var limit=3
 while(i<=limit)// 1<=20 2<=20 3<=
 {
     sum+=i//1 3 6
     i++//2 3
 }
 console.log(sum);


//  w a p to display a in its reverse order eg:input=123 output=321

//  ans: 123%10=3
//       123/10=12.3       math lybrary lek 12.3 pass cheyyunu ans 12
// math.floor(12.3)=12
// 12%10=2
// ""+3

// "3"+2
// 12/10 //1.2
// math.floor(1.2) //1
// 1%10     //1
// "32" + 1 //"321"
// Number("321")  321

var input=123
str=""
while(input!=0)
{
var lastDigit=input%10
str+=lastDigit
input=Math.floor(input/10)
}
console.log(Number(str));

// method 2
//  note: parseInt(12.5) ans12
// note: parseInt("123") ans123



