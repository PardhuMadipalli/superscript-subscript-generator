const DATA_KEY = 'data'

window.addEventListener("load", () => {
    // console.log('page loaded')
})

const outputSuper = document.getElementById("superscript-output")

document.getElementById("superscript-input")
    .addEventListener('input', function (event) {
        console.log(event.currentTarget.value)
        const currText = event.currentTarget.value;
        outputSuper.innerHTML = currText.sup()
    });

const outputSub = document.getElementById("subscript-output")

document.getElementById("subscript-input")
    .addEventListener('input', function (event) {
        console.log(event.currentTarget.value)
        const currText = event.currentTarget.value;
        outputSub.innerHTML = currText.sub()
    });    

