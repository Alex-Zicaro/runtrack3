function jourtravaille(date){
const jourFerie = ["test","coco","choco","bibi","lrl","aekak","&eze"]

const nombreDeJourFerie = jourFerie.length

for(i = 0 ; i < nombreDeJourFerie ; i++)
if(date == jourFerie[i]){
    console.log(date + ' bingo')
}
if(i % 4 == 0 || i % 5 == 0){
    console.log(date + " est un week-end")
}
}
jourtravaille('tajin')
console.log(4/4)

// getTime & getDay & new date