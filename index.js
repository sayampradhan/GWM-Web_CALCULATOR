// Get the screen and all buttons
var screen = document.querySelector('#screen');
var buttons = document.querySelectorAll('.btn');

// Add event listeners to buttons
for (var button of buttons) {
    button.addEventListener('click', function (e) {
        var buttonText = e.target.innerText;
        console.log('Button Text is', buttonText);

        if (buttonText === 'X') {
            buttonText = '*';
        }

        if (buttonText === '÷') {
            buttonText = '/';
        }

        // Append the button's text to the screen
        screen.value += buttonText;
    });
}

// Perform trigonometric calculations
function sin() {
    screen.value = Math.sin(screen.value);
}

function cos() {
    screen.value = Math.cos(screen.value);
}

function tan() {
    screen.value = Math.tan(screen.value);
}

// Calculate power and square root
function pow() {
    screen.value = Math.pow(screen.value, 2);
}

function sqrt() {
    screen.value = Math.sqrt(screen.value);
}

// Calculate the natural logarithm
function log() {
    screen.value = Math.log(screen.value);
}

// Set the value of pi and e
function pi() {
    screen.value = Math.PI;
}

function e() {
    screen.value = Math.E;
}

// Calculate factorial
function fact() {
    var i, num, f;
    f = 1;
    num = parseFloat(screen.value);

    for (i = 1; i <= num; i++) {
        f = f * i;
    }

    screen.value = f;
}

// Remove the last character from the screen
function backspc() {
    screen.value = screen.value.slice(0, -1);
}
