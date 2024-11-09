function getRandomNumber() {
    return Math.floor(Math.random() * 256) 
}

function createGrid(num = 16) {    
    const container = document.querySelector('#container');

    while (container.childNodes.length) {
        container.firstChild.remove();
    }
    let div;
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            div = document.createElement('div');
            div.setAttribute('class', 'square')
            container.appendChild(div);
        }
    }
}

function getUserInput() {
    let input = +prompt("Enter The Number of Squares You like");
    return input;
}

function changeSquares() {
    let input = getUserInput();
    input = input < 16 || input > 100 ? 16 : input;
    createGrid(input);
    const divs = document.querySelectorAll('#container div');
    
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.cssText = `
            width: calc(560px / ${input});
            height: calc(560px / ${input});`
    }
}

createGrid();

let color;
const btn = document.querySelector('.buttons');
btn.addEventListener('click', (e) => {
    let target = e.target;

    switch (target.className) {
        case 'change-squares':
            changeSquares();
            break;
        
            case 'black':
            color = target.className;
            break;
            
            case 'red':
            color = target.className;
            break;
            
            case 'random-colors':
            color = 'random-colors'
            const opacity = document.querySelector('.opacity');
            if (opacity.classList.contains('active')) {
                opacity.classList.remove('active');
                opacity.style.cssText = `background-color: white; color: black;`;
            }
            break;
    }

    if (target.classList.contains('opacity')) {
        if (target.classList.contains('active')) {
        target.classList.remove('active');
        target.style.cssText = `background-color: white; color: black;`;
        } else {
            target.classList.add('active');
            target.style.cssText = `background-color: black; color: white`
        }
    }
});


const container = document.querySelector('#container');
container.addEventListener('mouseover', (e) => {
    let target = e.target;
    target.className;
    if (target.className === 'square') {
        const opacity = document.querySelector('.opacity');
        if (color == 'random-colors') {
            target.style.backgroundColor = `rgba(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()}, ${Math.random()})`;;
        } else if (opacity.classList.contains('active')) {
            target.style.backgroundColor = color;
            target.style.opacity = `${+target.style.opacity + 0.1}`
        } else {
            target.style.backgroundColor = color;
            target.style.opacity = `1`
        }
    }
});
