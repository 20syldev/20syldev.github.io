// Afficher ou non le texte italique
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('italique') !== 'true') {
      document.getElementById('info').style.visibility = 'visible';
    }
  });

// Fait un zoom de texte
function big(event) {
    event.target.style.fontSize = '1.8em';
    event.target.style.textDecoration = 'underline';
    event.target.style.transition = '1s';
}

// Reset le texte
function normal(event) {
    event.target.style.fontSize = '';
    event.target.style.textDecoration = '';
    event.target.style.transition = '1s';
}

// Paragraphe sous le sous-titre, et déplacement du bouton
function showSubTxt(text) {
    document.getElementById('txtChange' + text).style.textDecoration = 'underline';
    document.getElementById('txtChange' + text).style.fontSize = '1.25em';
    document.getElementById('txtChange' + text).style.paddingLeft = '5px';
    document.getElementById('txtChange' + text).style.paddingRight = '5px';
    document.getElementById('txtChange' + text).style.transition = '0.5s';

    document.getElementById('headerTxt' + text).style.opacity = '1';
    document.getElementById('headerTxt' + text).style.transition = '0.5s';
    
    document.getElementById('info').style.visibility = 'hidden';

    document.getElementById('btnProj').style.marginTop = '6em';
    document.getElementById('btnProj').style.transition = '0.5s';

    localStorage.setItem('italique', 'true')
}

// Reset l'affichage du sous-titre
function normalTxt(num) {
    document.getElementById('txtChange' + num).style.textDecoration = 'none';
    document.getElementById('txtChange' + num).style.fontSize = '1em';
    document.getElementById('txtChange' + num).style.padding = '0';
    document.getElementById('txtChange' + num).style.transition = '0.5s';

    document.getElementById('headerTxt' + num).style.opacity = '0';
    document.getElementById('headerTxt' + num).style.transition = '0.5s';

    document.getElementById('btnProj').style.marginTop = '2em';
    document.getElementById('btnProj').style.transitionDelay = '0.4s';
    
    setTimeout(function() {
        document.getElementById('btnProj').style.transitionDelay = '0s';
    });
}