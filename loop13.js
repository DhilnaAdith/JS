//nested loop - a loop inside another loop

//print pattern

// 1 1 1 1 
// 2 2 2 2
// 3 3 3 3 
// 4 4 4 4

for(row=1;row<=4;row++)
{
    str=""
    for(col=1;col<=4;col++){
        str+=row // "1" "11" "111"
    }
    console.log(str); //1111
}