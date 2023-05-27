// document.getElementsByClassName('container')
let child = document.getElementById('container').children;
console.log({child});

let lastchild = document.getElementById('container').lastChild;
console.log({lastchild})

document.getElementById('hello').style.color = 'red'
document.getElementById('hello').style.textDecoration = 'underline'

document.getElementById('text').innerHTML = 'Hello there? my name is Angie Mumo'

let h2 = document.createElement('h2')

document.getElementById('container').appendChild('h2');
h2.innerHTML = "I am new here";
document.getElementById('container').appendChild(h2);

let button = getElementById('button');
button.addEventListener('click', function(){
    button.innerHTML = 'Clicked!!'
})
