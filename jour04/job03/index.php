<?php

$typePokemon = [
    'Acier', 'Combat', 'Dragon', 'Eau', 'Feu', 'Electrik', 'Fée', 'Glace',
    'Insecte', 'Normal', 'Plante', 'Poison', 'Psy', 'Roche', 'Sol', 'Spectre', 'Ténèbres', 'Vol'
]

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="script.js" Defer></script>
</head>

<body>
    <header>

    </header>

    <main>
        <section>
            <form id="radio" method="POST">
                <label for="id">Trier par id : </label>
                <input type="radio" name="select" id="id">
                <label for="nom">Trier par nom : </label>
                <input type="radio" name="select" id="nom">
                <label for="type">Trier par type : </label>
                <input type="radio" name="select" id="type">
            </form>

            <article>

                <form id="hidden" action="" method="POST">

                    <input type="text" name="id" id="id" placeholder="id">
                    <input type="text" name="nom" id="nom" placeholder="nom">

                    <select name="type" id="type">
                        <?php foreach ($typePokemon as $type) { ?>
                            <option value="<?= $type ?>"><?= $type ?></option>
                        <?php } ?>
                    </select>

                    <input type="submit" name="filtrer" id="filtrer" placeholder="filtrer">
                </form>
            </article>
        </section>
    </main>
    <footer>

    </footer>
</body>

</html>