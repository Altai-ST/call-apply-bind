/*let elem = document.getElementById('elem');

function func() {
    alert(this.value);
}

func.call(elem); -Первое задание*/

let elem = document.getElementById('elem');

function func(surname, name) {
    alert(this.value + ' ' + surname + ' ' + name);
}


func.call(elem, 'Иванов', 'Иван');