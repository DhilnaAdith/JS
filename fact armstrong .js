// factorial of a Number
// 4! 4*3*2*1

var num = 4
var fact = 1
while(num>=1) 4>=1 t , 3>=1 t, 2>=1 t, 1>=1 t , 0>=1 f
{
    fact*=num //4 4*3 4*3*2  4*3*2*1
    num-- //3 2 1 0
}
console.log(fact);
 
// create armstrong number or not

// input = 153
// output= 1^3 + 5^3 + 3^3 = 1+125+27=153
 var input =153
 var num =input
 sum=0
 while(num!=0)
 {
     lastDigit = num%10
     sum+=lastDigit**3
     num=Math.floor(num/10)
}
console.log(sum);

if(sum==input)
{
    console.log("arstrong");
}
else{
    console.log("not arstrong");
}



