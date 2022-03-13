function jourtravaille(date){ 

const jourFerie = [        
'2020-01-01',
'2020-04-13',
'2020-05-01',
'2020-05-08',
'2020-05-21',
'2020-06-01',
'2020-07-14',
'2020-09-15',
'2020-11-01',
'2020-11-11',
'2020-12-25'];

const data = new Date(date)
var jour = data.getDate()
return jour
// const nombreDeJourFerie = jourFerie.length

// for(i = 0 ; i < nombreDeJourFerie ; i++)
// if(date == jourFerie[i]){
//     console.log(date + ' bingo')
// }
// if(i % 4 == 0 || i % 5 == 0){
//     console.log(date + " est un week-end")
// }
}
let tajin = jourtravaille('Jul 13 2020')

console.log(tajin)

// getTime & getDay & new date