//getElementById = one element
//getElementByClassName = many elements, but you must handle each one 
//you can declare up here
const newEvent = document.getElementById('new-event');
const listEvent = document.getElementById('idteste');

// and down here u just need a new const cause you arent able to change a const value?

newEvent.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        const newEventValue = newEvent.value;
        listEvent.innerText = newEventValue;
        newEvent.value = '';
    }
})
