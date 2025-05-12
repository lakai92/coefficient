document.title = "whynoterror";

const errorOverlay = document.createElement('div');
errorOverlay.style.position = 'fixed';
errorOverlay.style.top = '0';
errorOverlay.style.left = '0';
errorOverlay.style.width = '100vw';
errorOverlay.style.height = '100vh';
errorOverlay.style.backgroundColor = 'white';
errorOverlay.style.display = 'flex';
errorOverlay.style.alignItems = 'center';
errorOverlay.style.justifyContent = 'center';
errorOverlay.style.zIndex = '9999'; // поверх всего

const errorText = document.createElement('div');
errorText.textContent = 'error';
errorText.style.fontSize = '2rem';
errorText.style.color = 'black';

errorOverlay.appendChild(errorText);
document.body.prepend(errorOverlay);


window.scriptLoaded = true;
