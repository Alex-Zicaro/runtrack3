function jourtravaille(date) {
    var monthName = [
        "janvier",
        "fevrier",
        "mars",
        "avril",
        "mai",
        "juin",
        "juillet",
        "aout",
        "septembre",
        "octobre",
        "november",
        "decembre",
    ];

    const jourFerie = [
        "2020-01-01",
        "2020-04-13",
        "2020-05-01",
        "2020-05-08",
        "2020-05-21",
        "2020-06-01",
        "2020-07-14",
        "2020-09-15",
        "2020-11-01",
        "2020-11-11",
        "2020-12-25",
    ];

    const date = new Date(date);

    const nombreDeJourFerie = jourFerie.length;

    for (i = 0; i <= 11; i++) {
        var dateJourFerie = jourFerie[i];
        
        if (date.getTime() == dateJourFerie.getTime()) {
            console.log(
                date.getDate() +
                " " +
                monthName[date.getMonth()] +
                " " +
                date.getTime() +
                " Est un jour férié"
            );

            break;
        }
    }
}
