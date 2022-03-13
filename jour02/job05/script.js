function afficherJoursSemaines(){
    const joursSemaines = ["Lundi" , "Mardi" , "Mercredi" , "Jeudi" , "Vendredi" , "Samedi" , "Dimanche"];
    let nombreDeJour = joursSemaines.length;
    for(let i = 0 ; i < nombreDeJour ; i++){
        console.log(joursSemaines[i]);
    }
}
afficherJoursSemaines();