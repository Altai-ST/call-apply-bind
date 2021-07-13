/*let elem = document.getElementById('elem');

function func() {
    alert(this.value);
}

func.apply(elem); -Первое задание*/


let elem = document.getElementById('elem');
function func(surname, name) {
    alert(this.value + ' ' + surname + ' ' + name);
}


func.apply(elem, ['Иванов', 'Иван']);