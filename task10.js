for(row=1;row<=4;row++)
str=""
for(space=4;space>row;space--)
{
    str+=" "

}
for(col=1;col<=row;col++){
    str+="* "
}
console.log(str);

// print a hollow piramid
              *
          *       *
      *              *
  *   *   *  *  *   *   * 
  
for(row=1;row<=4;row++){
    str=""

for(col=1;col<=7;col++)
{
if(row==1 || row+col==5|| col-row==3)
    str+="*"
}
else{
    str+=" "
}}
console.log(str);
}

