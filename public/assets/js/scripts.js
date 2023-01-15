
jQuery(document).ready(function() {
	
    var navbar = document.querySelector('nav')
    window.onscroll = function() {
  
    // pageYOffset or scrollY
    if (window.pageYOffset > 100) {
      navbar.classList.add('header-no-bg')
    } else {
      navbar.classList.remove('header-no-bg')
    }
  }

    /*
        Background slideshow - Author Info Section
    */
    $('.author-bg').backstretch([
        "assets/img/backgrounds/author1.jpg",
        "assets/img/backgrounds/author3.jpg",
        "assets/img/backgrounds/author4.jpg"], {duration: 4000, centeredY: false, fade: 950});

    /*
        Background slideshow - Footer Section
    */

    $('.footer-bg').backstretch([
        "assets/img/backgrounds/footer1.jpg",
        "assets/img/backgrounds/footer2.jpg",
        "assets/img/backgrounds/footer3.jpg"], {duration: 4000, centeredY: false, fade: 950});

  })