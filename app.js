document.getElementById("container").style.display = "flex";
document.getElementById("container").style.justifyContent = "space-around";


document.getElementById("content-1").style.backgroundColor='orange';
document.getElementById("content-2").style.backgroundColor='crimson';
document.getElementById("content-3").style.backgroundColor='silver';
document.getElementById("content-4").style.backgroundColor='pink';


// var contents = document.querySelectorAll('.content')
var contents = document.getElementsByClassName('content');
console.log(contents);
for(var content of contents) {
    content.style.width ='300px'
    content.style.height='200px';
    content.style.display='flex';
    content.style.justifyContent='center';
    content.style.alignItems = 'center'
}