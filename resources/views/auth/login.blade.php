@extends('./layout/main')
@extends('./layout/navbar')

@section('container')
<div class="card login bg-dark text-white position-absolute top-50 start-50 translate-middle" id="card4">
    <div class="card-header text-center">
        <h1>Login </h1>
    </div>
    <div class="card-body text-center">
        <div class="row align-items-center">
            <div class="col-6">
                <h2>Welcome back!</h2>
                <p>Let's continue searching for anime?</p>
                <img class="login-img" src="https://www.icegif.com/wp-content/uploads/icegif-7031.gif" alt="">
            </div>
            <div class="col-6">
                <form action="">
                    <input type="email" class="form-control" placeholder="E-mail" required>
                    <br>
                    <input type="password" class="form-control" placeholder="Senha" required>
                    <br>
                    <div class="d-grid">
                        <button class="btn btn-primary" type="submit">Login</button>
                        <a class="link active forgor text-end" href="" data-bs-toggle="modal" data-bs-target="#forgor">Esqueceu sua senha?</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="forgor" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
    <div class="modal-dialog text-white modal-dialog-centered">
        <div class="modal-content bg-dark" name="darks">
            <div class="modal-header">
                <h2 class="modal-title" id="modalLabel">Esqueceu sua senha <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"><i class="fa-solid fa-question"></i></a></h2>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form action="">
                    <h5>Insira seu email para resetar sua senha:</h5>
                    <input type="text" class="form-control" placeholder="Insira seu email" required>
                    <br>
                    <div class="d-grid text-center">
                        <button class="btn btn-primary">Confirmar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection