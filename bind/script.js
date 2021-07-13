let elem = document.getElementById('elem');
function func(surname, name) {
    alert(this.value + ' ' + surname + ' ' + name);
}

let newFunc = func.bind(elem)
newfunc('Иванов', 'Иван'); 
newFunc('Петров', 'Петр'); 