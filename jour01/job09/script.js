/* Créez une fonction “tri” qui prend en paramètres un tableau de nombres
nommé “numbers” et une variable “order” qui contient “asc” ou “desc”. A
l’aide de la fonction sort() d’un algorithme développé par vos soins, cette fonction
doit trier le tableau dans l’ordre ascendant ou décroissant, selon le
paramètre passé, puis retourner le tableau. */
"use strict";
function tri(array , order = "asc"){


for(var i = 0 ; i < array.length; i++){

    for(var j = 0 ; j < array.length ; j++){



        if(array[j+1] < array[j]){

            var temporaire = array[j]

            array[j] = array[j+1]

            array[j+1] = temporaire

        

    } 

}

}
 if ( order == "desc" ){
    
        var number = array.reverse()
        return number
        }
return array
}



var array = [5,3,8,2,4];
tri(array,'desc')
console.log(array)

