/* Créez une fonction “sommenombrespremiers” qui prend en paramètres
deux variables. Si ces deux variables sont des nombres premiers, alors la
fonction retourne leur somme. Sinon, la fonction retourne false. */

function sommeNombre(int1 , int2){


    for(i = 2 ; i < int1 ; i++){
        if(int1 % i == 0 ){
            return false
        }
    }

    for(j = 2 ; j < int2 ; i++){
        if(int2 % j == 0){
            return false
        }
        
    }

    let resultat = int1 + int2
    return resultat 

}