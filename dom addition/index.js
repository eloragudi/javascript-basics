var first = document.querySelector('#fir')
var second = document.querySelector('#sec')
var result = document.getElementById('text')
var submit = document.getElementById('sub')

submit.addEventListener('click', function (e) {
    e.preventDefault()
    first = first.value
    second = second.value
    var add = Number(first) + Number(second)
    result.textContent = add
})
