function login()
{
    //local storage
    //1. to store data in local storage - setItem(key:string,value:string)
    user=uname.value
    console.log(user);
     localStorage.setItem("username",user)
    window.location = "dom4.html"

}
