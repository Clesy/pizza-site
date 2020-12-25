$(function() {
    $(".servicesInfo").sortable();
});

function hideImg() {
    let hide = document.getElementsByClassName(".servicesInfo")
    hide = this.style.display = 'none';
}

let slideAutoIndex = 0;
showAutoSlides();

function plusSlides(n) {
    showAutoSlides(slideAutoIndex += n);
}

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

function clickAlert() {
    alert('Согласится с условиями и отправить данные с формы!')
}