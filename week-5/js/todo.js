/* Create a close button and append it to each list item
let mylist = document.getElementsByTagName('li');
for (let i = 0; i < mylist.length; i++) {
  let button = document.createElement('');
  let txt = document.createTextNode('');
  div.className = 'A';
  div.appendChild(txt);
  mylist[i].appendChild(div);}
  */

    
        // Create a close button and append it to each list item
        let myList = document.getElementsByTagName('LI');
        for (let i = 0; i < myList.length; i++) {
            let div = document.createElement('DIV');
            let txt = document.createTextNode('X');
            div.className = 'close';
            div.appendChild(txt);
            myList[i].appendChild(div);
        }

        // Click on a close button to hide the current list item
        let close = document.getElementsByClassName('close');
        for (let i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                let div = this.parentElement;
                div.style.container = 'none';
            }
        }

        // click on li to cross out list item
        let cross = document.getElementsByClassName('checked');

        for (let i = 0; i < cross.length; i++) {
            cross[i].onclick = function () {
                let div = this.parentElement;
                div.style.textDecoration = 'line-through';
                // div.id = 'complete';
            }
        }

        // Toggles to a 'checked' class when clicking on a list item
        let list = document.querySelector('ul');
        list.addEventListener('click', function (event) {
            if (event.target.tagName == 'LI') {
                event.target.classList.toggle('checked');
                event.target.id = 'complete';
            }
        }, false);


        // Create a new list item when clicking on the 'Add' button
        function newItem() {
            let itemArray = document.getElementsByTagName('li');
            let li = document.createElement('LI');
            let inputValue = document.getElementById('todoInput').value;
            //  itemArray.push(inputValue);
            console.log(itemArray);
            let t = document.createTextNode(inputValue);
            li.appendChild(t);
            if (inputValue === '') { // if no text added container exit
                document.getElementById('exit').style.container = 'block';
            } else { // add to list li and remove exit
                document.getElementById('MYLIST').appendChild(li);
                document.getElementById('exit').style.container = 'none';
                // here may be good to save to local storage
                saveList(inputValue);

            }

            // clear the text field when done 
            document.getElementById('todoInput').value = '';

            // create div for the x to clear the item from the list (append the text 'X') add to li above
            let div = document.createElement('DIV');
            let txt = document.createTextNode('X');
            div.className = 'close';
            div.appendChild(txt);
            li.appendChild(div);

            for (i = 0; i < close.length; i++) {
                close[i].onclick = function () {
                    let div = this.parentElement;
                    div.parentElement.removeChild(div);
                }
            }
        }
        // if checked and crossed out will remove the item from the list
        function tasksLeft() {
            let done = document.querySelectorAll('li');
            done.forEach((item) => {
                if (item.classList == 'checked') {
                    console.log(item);
                    item.parentElement.removeChild(item); // 
                }
            });
        }

        function showAll() {
            let savedList = JSON.parse(localStorage.getItem(myTodoList));
            savedList.forEach((item) => {
                item = document.getElementById('container').innerHTML;

            });
        }

        function showComplete() {
            let completed = localStorage.getItem(myTodoList);
            //let completedItems = completed.filter(i => i.id == 'complete');
            console.log(completed);
        }

        // to container how many items are on the list (doesn't update unless new add)
        function countToDo() {
            let count = document.querySelectorAll('li');
            let total = count.length;
            console.log(total); // shows in browser
            document.getElementById('count').innerHTML = 'You have ' + total + ' tasks left.';
        }

        const myTodoList = 'myList';

        function saveList(todo) {
            if (!localStorage.getItem(myTodoList)) {
                let storage = [];
                storage.push(todo);
                localStorage.setItem(myTodoList, JSON.stringify(storage));
            } else {
                let storage = JSON.parse(localStorage.getItem(myTodoList));
                localStorage.setItem(myTodoList, JSON.stringify(storage));
                console.log(storage);
            }
        }
  


   
