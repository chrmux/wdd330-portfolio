let p = document.getElementById('click');
let p1 = document.getElementById('dblclick');
let p2 = document.getElementById('mouse');


function doSomething(){
    console.log('Something Happened!');
    }
    p.addEventListener('click', doSomething);
    p1.addEventListener('dbclick', doSomething);
    p2.addEventListener('mouse', doSomething);