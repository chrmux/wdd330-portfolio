/* Create a close button and append it to each list item
let mylist = document.getElementsByTagName('LI');
for (let i = 0; i < mylist.length; i++) {
  let div = document.createElement('DIV');
  let txt = document.createTextNode('X');
  div.className = 'close';
  div.appendChild(txt);
  mylist[i].appendChild(div);
}*/