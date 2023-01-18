@extends('./layout/main')
@extends('./layout/navbar')

@section('container')
<div class="container d-flex align-items-center justify-content-center text-center imgs bg-dark" id="carousel">
    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="img-1">
                    <div class="carousel-text">
                        <h1>New Pokemon anime has a new protagonist!</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <img src="{{asset('/images/pokemon.png')}}" class="d-block w-100" alt="">
            </div>
            <div class="carousel-item">
                <div class="img-1">
                    <div class="carousel-text">
                        <h1>News from One Piece, new chapter is fire!</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <img src="{{asset('/images/seagull.png')}}" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <div class="img-1">
                    <div class="carousel-text">
                        <h1>Nier: automata anime is releasing in 2023</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <img src="{{asset('/images/nier.png')}}" class="d-block w-100" alt="...">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon bg-dark w-30 h-25" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon bg-dark w-30 h-25" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</div>

<div class="container">
    <div class="card mb-3 bg-dark" id="card1">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="https://i.insider.com/61d786c637afc20019ac999b?width=700" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <div class="card-title">
                        <h1>This season's anime is awesome!</h1>
                        <hr>
                    </div>
                    <p class="align-items-center justify-content-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, eaque nostrum
                        dolore esse ea saepe sequi vel! Minima totam quos sit architecto perspiciatis
                        tenetur dignissimos aliquid libero vero ex doloremque, ab quo iure, quod hic
                        cupiditate delectus laborum? Repellat mollitia magnam similique id tenetur
                        voluptas aliquid natus animi sunt quae.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="container">
    <div class="card mb-3 bg-dark" id="card2">
        <div class="row g-0">
            <div class="col-md-7">
                <div class="card-body">
                    <div class="card-title">
                        <h1>The Chainsaw Man anime aired!</h1>
                        <hr>
                    </div>
                    <p class="align-items-center justify-content-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, eaque nostrum
                        dolore esse ea saepe sequi vel! Minima totam quos sit architecto perspiciatis
                        tenetur dignissimos aliquid libero vero ex doloremque, ab quo iure, quod hic
                        cupiditate delectus laborum? Repellat mollitia magnam similique id tenetur
                        voluptas aliquid natus animi sunt quae.
                    </p>
                </div>
            </div>
            <div class="col-md-5">
                <img src="https://popularanime.com.br/wp-content/uploads/2022/10/karakter-denji-dalam-anime-chainsaw-man.jpg" class="img-fluid rounded-end">
            </div>
        </div>
    </div>
</div>

<footer class="footer text-center bg-dark" id="foot">
    <hr>
    <div class="container">
        <div class="row align-items-center justify-content-center">
            <div class="col-lg-4 mb-4">
                Copyright&copy; <b>Matheus Oliveira 2023</b>
            </div>
        </div>
    </div>
</footer>
@endsection