var audio = new Audio('select_click.wav')
let buttons = document.querySelectorAll(".number")
let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log(e.target)
        if (e.target.innerHTML == '=') {
            audio.play();
            string = eval(string);
            document.querySelector('.input').innerHTML = string;
        }
        else if (e.target.innerHTML == 'C') {
            string = String(string).slice(0, -1);
            document.querySelector('.input').innerHTML = string;
        } else if (e.target.innerHTML == 'AC') {
            string = String(string).slice(0, 0);
            document.querySelector('.input').innerHTML = string;
        }
        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('.input').innerHTML = string;
        }
    })
})

console.log('h')