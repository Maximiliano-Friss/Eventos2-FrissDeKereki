const mainContainer2 = document.getElementById('main-container2');
const theme = new Audio('../audio/RedTheme.mp3');
theme.setAttribute('muted', 'muted');
const footerContainer = document.getElementById('footer-container');

mainContainer2.onload = cargarMain2();

function cargarMain2() {
    theme.play();
    const audioOff = document.createElement('img');
    audioOff.setAttribute('src', '../img/mute.png');
    footerContainer.appendChild(audioOff);
    audioOff.classList.add('audioOff');
    audioOff.onclick = () => theme.pause();
    audioOff.onmouseenter = () => audioOff.style.cursor = 'pointer';
}
