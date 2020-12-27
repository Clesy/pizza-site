/* DRAG AND DROP IMAGE*/

$(function() {
    $(".servicesInfo").sortable();
});

/* HIDE IMAGE */

$(".servicesInfoPhoto").click(function() {
    this.style.display = 'none';
});

/*  */

$(function() {
    $(".accordion").accordion();
});

let slideAutoIndex = 0;
showAutoSlides();

/* NEXT SLIDES */

function plusSlides(n) {
    showAutoSlides(slideAutoIndex += n);
}

/* BACK SLIDES */

function currentSlide(n) {
    showAutoSlides(slideAutoIndex = n)

}

function showAutoSlides() {
    let i;
    const slides = document.getElementsByClassName("slides");
    /*AUTO SLIDER */
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideAutoIndex++;
    if (slideAutoIndex > slides.length) {
        slideAutoIndex = 1
    }
    slides[slideAutoIndex - 1].style.display = "block";
    setTimeout(showAutoSlides, 20000);
}

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

/* SHOW MESSAGE ON CLICK BUTTON */

function clickAlert() {
    alert('Согласится с условиями и отправить данные с формы!')
}