const mainContainer2 = document.getElementById('main-container2');
const logoPokemonContainer = document.getElementById('logoPokemon-container')
const theme = new Audio('../audio/RedTheme.mp3');
theme.setAttribute('muted', 'true');
const welcomeContainer = document.getElementById('welcome-container');
const welcomeContainerNombres = document.getElementById('welcome-container-nombres');
welcomeContainer.appendChild(welcomeContainerNombres);
const footerContainer = document.getElementById('footer-container');
const audioOff = document.createElement('img');
const logoPokemonImg = document.createElement('img');
const profOak = document.createElement('img');
const msgWelcome = document.createElement('p');
const btnNext = document.createElement('button');

const inputUsuario = document.createElement('input');
const inputOponente = document.createElement('input');
const submitNombres = document.createElement('input');


mainContainer2.onload = cargarMain2();

function cargarMain2() {
    theme.play();
    audioOff.setAttribute('src', '../img/audiooff.png');
    footerContainer.appendChild(audioOff);
    audioOff.classList.add('audioOff');
    audioOff.onclick = () => theme.pause();
    audioOff.onmouseenter = () => audioOff.style.cursor = 'pointer';

    setTimeout(function () {
        logoPokemonImg.setAttribute('src', '../img/pokemonLogo.gif');
        logoPokemonContainer.appendChild(logoPokemonImg);
        logoPokemonImg.classList.add('animate__animated', 'animate__fadeInDown', 'animate__slower');
        logoPokemonImg.style.width = '80%';
        
        setTimeout(function () {
            logoPokemonImg.classList.remove('animate__fadeInDown');
            logoPokemonImg.classList.add('animate__fadeOutDown');
        }, 7000);
        
        setTimeout(function () {
            welcomeContainer.classList.add('cuadroGrande');
            welcomeContainer.appendChild(profOak);
            profOak.setAttribute('src', '../img/profOak.png');
            profOak.classList.add('profOak', 'animate__animated', 'animate__zoomIn');

            welcomeContainerNombres.appendChild(msgWelcome);
            msgWelcome.innerHTML = `Hola!<br>Soy el Profesor Oak.<br> Todo listo para comenzar?`;
            msgWelcome.classList.add('textos', 'animate__animated', 'animate__zoomIn');
            welcomeContainerNombres.appendChild(btnNext);
            btnNext.innerHTML = 'Continuar'
            btnNext.classList.add('textos', 'btn-Next', 'animate__animated', 'animate__zoomIn');
        }, 10000);
    }, 4000);
}

btnNext.addEventListener('click', () => {
    msgWelcome.classList.remove('animate__zoomIn');
    btnNext.classList.remove('animate__zoomIn');
    msgWelcome.classList.add('animate__zoomOut');
    btnNext.classList.add('animate__zoomOut');

    setTimeout(function () {
        msgWelcome.remove();
        btnNext.remove();
    
        welcomeContainerNombres.appendChild(inputUsuario);
        welcomeContainerNombres.appendChild(inputOponente);
        welcomeContainerNombres.appendChild(submitNombres);
        inputUsuario.type = 'text';
        inputUsuario.id = 'nombreUsuario';
        inputUsuario.placeholder = 'Ingresa tu nombre';
        inputUsuario.required = true;
        inputUsuario.className = 'inputNombres';

        inputOponente.type = 'text';
        inputOponente.id = 'nombreOponente';
        inputOponente.placeholder = 'Ingresa el nombre de tu oponente';
        inputOponente.required = true;
        inputOponente.className = 'inputNombres';

        submitNombres.type = 'submit';
        submitNombres.id = 'btn-submit';
        submitNombres.value = 'Continuar';
        submitNombres.required = true;
        submitNombres.className = 'btn-Next';
    }, 1500);

    



})

