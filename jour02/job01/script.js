/* Créez une balise button ayant comme id “button”. Lorsque l’on clique
dessus, un <article> contenant le texte suivant est ajouté au contenu de la
page : “L'important n'est pas la chute, mais l'atterrissage.”. Si on clique à
nouveau sur ce bouton, l’article disparaît. L’apparition / Disparition doivent
être gérées dans une fonction nommée “showhide()”. */

'use strict';

document.addEventListener('DOMContentLoaded',function loaded(){
    
    var bouton = document.getElementById('id');
    var citation = document.getElementById('citation');
    

    function onClickChangeHTML (){
        var contenue = citation.innerHTML;
        console.log(contenue);
    }
    bouton.addEventListener('click',onClickChangeHTML)
});