<nav class="navbar navbar-expand-lg bg-dark navs" id="nav">
    <div class="container-fluid">
        <h1><a id="logo" class="navbar-brand links text-white" href="/">AnimeList</a></h1>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a id="list"  class="nav-link active links text-white" aria-current="page" href="/list">List</a>
                </li>
                <li class="nav-item">
                    <a id="register"  class="nav-link active links text-white" aria-current="page" href="/register">Register</a>
                </li>
                <li class="nav-item">
                    <a id="login"  class="nav-link active links text-white" aria-current="page" href="/login">Login</a>
                </li>
                <li class="nav-item">
                    <div class="dropstart">
                        <button id="toggle" type="button" class="but" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-sharp fa-solid fa-gear"></i></button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" onClick="darkMode()">Dark Mode</a></li>
                            <li><a class="dropdown-item" onClick="lightMode()">Light Mode</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</nav>