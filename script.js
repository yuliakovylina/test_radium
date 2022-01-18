let content = document.querySelector('.content');
let contentText = content.querySelector('.content-text');

content.addEventListener('click', function () {
    content.style.opacity = '0'
})

document.onkeydown = function (document) {
    if (document.keyCode == '32') {
        content.remove()
    }
}