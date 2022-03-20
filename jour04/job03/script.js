/* Créez un formulaire permettant de trier ces données. Il doit contenir les
champs suivant : id (input type text), nom (input type text), type (liste
déroulante) et filtrer (input type button). 'Lorsque l’on clique sur “filtrer”, le
script doit à l’aide de Fetch, récupérer le contenu du fichier et lister les
éléments répondant aux critères sélectionnés en les affichant sur une page
HTML. */
'use strict';

document.addEventListener('DOMContentLoaded', () => {


    let trier = document.getElementsByName('select')
    let hidden = document.getElementById('hidden')
    console.log(trier)

    hidden.style.display = 'none'

    document.addEventListener('click' , () =>{


    })

    // bouton.addEventListener('click' , () => {

    //     fetch('pokemon.json')
    //     method="POST"
    //     .then(response)
    //     console.log(response)

    //     let response = await 
    // } )

})