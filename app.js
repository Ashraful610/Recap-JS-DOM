const header = document.getElementsByTagName('header')[0];
header.style.width='95%';
header.style.backgroundColor='skyBlue'
header.style.margin='20px auto'
header.style.textAlign='center'
header.style.padding='20px'
header.style.color='white'
header.style.fontWeight='bold'
header.style.lineHeight='20px'



document.getElementById("container").style.display = "flex";
document.getElementById("container").style.justifyContent = "space-around";


document.getElementById("content-1").style.backgroundColor='orange';
document.getElementById("content-2").style.backgroundColor='silver';
document.getElementById("content-3").style.backgroundColor='pink';
document.getElementById("content-4").style.backgroundColor='crimson';


// var contents = document.querySelectorAll('.content')
var contents = document.getElementsByClassName('content');
for(var content of contents) {
    content.style.width ='300px'
    content.style.height='200px';
    content.style.display='flex';
    content.style.justifyContent='center';
    content.style.alignItems = 'center'
}
var boxTitle = document.getElementsByTagName('h2')
for(var title of boxTitle){
    title.style.color = 'white';
}

const eventTitle = document.getElementById('eventTitle')
eventTitle.style.color = 'pink'
eventTitle.style.textAlign = 'center'
eventTitle.style.fontWeight='bold'

const greenBtn = document.getElementById('green-btn')
greenBtn.addEventListener('click',function() {
    document.body.style.backgroundColor='green'
})