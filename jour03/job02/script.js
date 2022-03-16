'use strict';

/* Le but de ce job sera dans un premier temps de créer une balise button
ayant comme id “button”. Cette balise servira à mélanger l’ensemble des
images de l’arc-en-ciel. Par la suite, vous devrez faire en sorte qu’il soit
possible de remettre les images dans le bon ordre. Lorsque l’on clique sur
une image, elle doit changer de div.
Le bouton mélanger fait remonter les images présents dans la div
“rangees” et réorganise les images de façon aléatoire.
Une fois qu’il y a 6 images dans la div “rangees”, un message s’affiche en
dessous. Si l’arc-en ciel est bien reconstitué, le message “Vous avez
gagné” s’affiche en vert. Sinon, le message “Vous avez perdu” s’affiche en
rouge. */

$("#button").click(function()
{
    for(var i = 0;i<=140;i++)
    {

        var alea = Math.floor((Math.random() * 6) + 1);
        $("#id" + alea).appendTo($("#melangees"));
        console.log(i);

    }

});

$("img").click(function()
{
$('#id').appendTo("#rangees");
});