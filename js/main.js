const pokeballSound = new Audio('../audio/pokeballSoundEffect.mp3');
const theme = new Audio('../audio/RedTheme.mp3');
const mainContainer = document.getElementsByClassName('main-container');
const footerContainer = document.getElementById('footer-container');
const circleNegro = document.getElementById('circle-negro');
const circleBlanco = document.getElementById('circle-blanco');
const pokeballRojo = document.getElementById('pokeball-rojo');
const pokeballNegro = document.getElementById('pokeball-negro');
const pokeballBlanco = document.getElementById('pokeball-blanco');
const btnPokeball = document.getElementById('btn-pokeball');

btnPokeball.addEventListener('click', () => {
    pokeballSound.play();
    circleNegro.classList.add('animate__animated', 'animate__bounceOut');
    btnPokeball.classList.add('animate__animated', 'animate__bounceOut');
    circleBlanco.classList.add('animate__animated', 'animate__bounceOut');
    setTimeout(function () {
        pokeballRojo.classList.add('animate__animated', 'animate__fadeOutUp');
        pokeballNegro.classList.add('animate__animated', 'animate__fadeOutRightBig');
        pokeballBlanco.classList.add('animate__animated', 'animate__fadeOutDown');
    }, 1000);
    setTimeout(function () {
        pokeballNegro.remove();
        pokeballBlanco.remove();
    }, 1800);
    setTimeout(function () {
        theme.play();
        const audioOff = document.createElement('img');
        audioOff.setAttribute('src', '../img/audiooff.png');
        footerContainer.appendChild(audioOff);
        audioOff.classList.add('audioOff');
        audioOff.onclick = () => theme.pause();
        audioOff.onmouseenter = () => audioOff.style.cursor = 'pointer';
    }, 2000);
});
