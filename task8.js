// to find exponent of no& display the no whose exponent is in range of 8 nd 36

exponent = 3
low=8
up=36
result=0
i=1

while(i<=up){ //1<=36 t 2<=36 t
     result=i**exponent //1 8
     if(result>=low&& result<=up)
     {   //1>=8 f 8>=8 && 8<=36 
         console.log(i);    //2
         }
         i++  //2
}
 
   output 2 3