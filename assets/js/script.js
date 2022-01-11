
function changeMode() {

    // chamando a função que vai mudar as cores
    changeClasses();

    // chamando a função que vai mudar os textos
    changeText();
}

// mudar as cores
function changeClasses() {
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

// mudar os textos
function changeText() {
    const lightMode = "Light Mode";
    const darkmode = "Dark Mode";

    if(body.classList.contains(darkModeClass)) {
        button.innerHTML = lightMode;
        h1.innerHTML = darkmode + " ON";
        return;
    }

    button.innerHTML = darkmode;
    h1.innerHTML = lightMode + " ON";

}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];



// adicionar um eventListener - para quando o button for clicado acionar a function changeMode()
button.addEventListener('click', changeMode)