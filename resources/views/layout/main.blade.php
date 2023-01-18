<!doctype html>
<html lang="pt-br">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="{{ asset('/css/style.css') }}">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">

    <!-- fontawesome -->
    <script src="https://kit.fontawesome.com/0a4d78abd9.js" crossorigin="anonymous"></script>

    <!-- title -->
    <title>AnimeList</title>
</head>

<body class="bg-bd">

    @yield('container')

    <script>
        function lightMode() {
            var body = document.body;
            var nav = document.getElementById("nav");
            var foot = document.getElementById("foot");
            var cards = [document.getElementById("card1"), document.getElementById("card2")];
            var carousel = document.getElementById("carousel");
            var navbar = [document.getElementById("logo"), document.getElementById("list"), document.getElementById("register"), document.getElementById("login")]
            var config = document.getElementById("toggle");
            
            for (x = 0; x < navbar.length; x++) {
                navbar[x].classList.remove("text-white");
                navbar[x].classList.add("text-dark");
            }

            body.classList.remove("bg-db");
            body.classList.add("light-mode");

            nav.classList.remove("bg-dark");
            nav.classList.add("light-nav");

            foot.classList.remove("bg-dark");
            foot.classList.add("light-nav");

            carousel.classList.remove("bg-dark");
            carousel.classList.add("light-nav");

            config.classList.remove("but");
            config.classList.add("but-dark");

            for (x = 0; x < cards.length; x++) {
                cards[x].classList.remove("bg-dark");
                cards[x].classList.add("light-nav");
            }
        }

        function darkMode() {
            var body = document.body;
            var nav = document.getElementById("nav");
            var foot = document.getElementById("foot");
            var cards = [document.getElementById("card1"), document.getElementById("card2"), document.getElementById("card3"), document.getElementById("card4")];
            var carousel = document.getElementById("carousel");
            var navbar = [document.getElementById("logo"), document.getElementById("list"), document.getElementById("register"), document.getElementById("login")]
            var config = document.getElementById("toggle");

            for (x = 0; x < navbar.length; x++) {
                navbar[x].classList.remove("text-dark");
                navbar[x].classList.add("text-white");
            }

            body.classList.remove("light-mode");
            body.classList.add("bg-db");

            nav.classList.remove("light-nav");
            nav.classList.add("bg-dark");

            foot.classList.remove("light-nav");
            foot.classList.add("bg-dark");

            carousel.classList.remove("light-nav");
            carousel.classList.add("bg-dark");

            config.classList.remove("but-dark");
            config.classList.add("but");

            login.classList.remove("light-nav");
            login.classList.add("bg-dark");

            for (x = 0; x < cards.length; x++) {
                cards[x].classList.remove("light-nav");
                cards[x].classList.add("bg-dark");
            }
        }
    </script>

    <!-- Importando os javascripts -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js" integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD" crossorigin="anonymous"></script>
</body>

</html>