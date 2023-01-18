@extends('./layout/main')
@extends('./layout/navbar')

@section('container')
<div class="card register bg-dark text-white position-absolute top-50 start-50 translate-middle" id="card3">
    <div class="card-header text-center">
        <h1>Register</h1>
    </div>
    <div class="card-body text-center">
        <div class="row">
            <div class="col-6 left-side">
                <h2>Welcome to AnimeList</h2>
                <p>Want to discover some new anime? Here is the right place!<i class="fa-solid fa-chart-line"></i></p>
                <img src="https://c.tenor.com/lPrqJck5fvoAAAAM/rikka-rikka-takanashi.gif" alt="">
            </div>
            <div class="col-6 right-side mt-4">
                <form action="">
                    <input type="name" class="form-control" placeholder="Nome de usuario" required>
                    <br>
                    <input type="email" class="form-control" placeholder="Email" required>
                    <br>
                    <input type="password" class="form-control" placeholder="Senha" required>
                    <br>
                    <input type="password" class="form-control" placeholder="Repita sua senha" required>
                    <br>
                    <div class="d-grid">
                        <button class="btn btn-primary mb-3" type="submit">Cadastrar</button>
                        <p>Já tem uma conta? <a class="link active" href="/login">Entre aqui</a></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection