//local storage

//2.to get data from local storage
var uname = localStorage.getItem('username')
head1.innerHTML = ' Welcome ${uname} '
function logout()
//3.remove data from local storage - removeItem()
localStorage.removeItem('username')
window.location = "dom3.html"