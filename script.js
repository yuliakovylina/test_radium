let name = document.querySelector('.name');
let folio = name.querySelector('.folio');

name.addEventListener('click', function () {
    name.style.opacity = '0'
})

document.onkeydown = function (name) {
    if (name.keyCode == '32') {
        folio.remove()
    }
}