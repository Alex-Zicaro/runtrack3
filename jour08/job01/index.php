<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <title>Document</title>
</head>

<body>
    <header>
        <div class="card-panel red accent-2">
            <a href="">Accueil</a>
            <a href="">inscription</a>
            <a href="">Connexion</a>
            <a href="">Rechercher</a>
        </div>

    </header>
    <main>
        <section>
            <article>
                <form action="">
                    <fieldset>

                        <h4>
                            Votre civilité
                        </h4>

                        <form action="#">
                            <p>
                                <label>
                                    <input name="group1" type="radio" checked />
                                    <span>Homme</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input name="group1" type="radio" />
                                    <span>Femme</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input name="group1" type="radio" />
                                    <span>Non Binaire</span>
                                </label>
                            </p>

                        </form>
                    </fieldset>

                    <label for="prenom">Votre prenom : </label>
                    <input type="text" name="prenom" id="prenom">

                    <label for="nom">Votre nom : </label>
                    <input type="text" name="nom" id="nom">

                    <label for="adresse">Votre adresse : </label>
                    <input type="text" name="adresse" id="adresse">

                    <label for="email">Votre email : </label>
                    <input type="email" name="email" id="email">

                    <label for="password">Votre mdp : </label>
                    <input type="password" name="password" id="password">

                    <h4>
                        Quelle sont vos passion ?
                    </h4>

                    <p>
                        <label>
                            <input type="checkbox" />
                            <span>Informatique</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input type="checkbox" />
                            <span>Voyage</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input type="checkbox" />
                            <span>Sport</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input type="checkbox" />
                            <span>Lecture</span>
                        </label>
                    </p>

            </article>
            <input type="submit" name="envoyer" value="envoyer">
            </form>
        </section>

    </main>
    <footer>
        <footer class="page-footer">
            <div class="container">
                <div class="row">
                    <div class="col l6 s12">
                        <h5 class="white-text">Footer Content</h5>
                        <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                    </div>
                    <div class="col l4 offset-l2 s12">
                        <h5 class="white-text">Links</h5>
                        <ul>
                            <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                            <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                            <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                            <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <div class="container">
                    © 2022 Alex Zicaro
                    <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
                </div>
            </div>
        </footer>
    </footer>
</body>

</html>