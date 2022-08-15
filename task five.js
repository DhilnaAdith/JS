// w.a.p to print largest ,second largest and sorted order among 3 numbers
var num1=10,num2=20,num3=30
if(num1>num2 & num1>num3 )
{
    console.log("largest :",num1);//largest num1

   if(num2>num3)
    {
        console.log("2nd largest:" ,num2);
        console.log("sorted order:",num1,num2,num3); 
    }
    else
    { console.log("2nd largest:",num3);
      console.log("sorted order:",num1,num3,num2);
          }

}
else if(num2>num1 & num2>num3)
{
    console.log("largest:",num2);//largest num2

    if(num1>num3)
     {
         console.log("2nd largest:" ,num1);
         console.log("sorted order:",num2,num1,num3); 

     }
     else
     { console.log("2nd largest:",num3); 
       console.log("sorted order:",num2,num3,num1);
           }


}
if(num3>num1 & num3>num2)
{
    console.log("largest:",num3);//largest num3 if(num1>num3)
    if(num1>num2)
    {
        console.log("2nd largest:" ,num1);
        console.log("sorted order:",num3,num1,num2); 

    }
    else
    { console.log("2nd largest:",num2);
     console.log("sorted order:",num3,num2,num1);
          }


}
// single ambresent aanenkil 2 conditionilum evaluate cheyyum(true lum false lum)
// double ambresent aanu koduthethenkil 1st condition  check cheyth ath false aanenkil 2 nd condition avar cheyyilla AND true only when 2 conditions are true

