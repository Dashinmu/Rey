var modal = document.getElementById("myModal");// Get the modal
var btn = document.getElementById("btn");

btn.onclick = function() {
    modal.style.display = "block";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        back.classList.toggle('lock');
    }
}


var swiper1 = new Swiper('.swiper-container1', {
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,

    pagination: {
        el: '.swiper-pagination1',
  
    },
    navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
    },
    debugger: true,
});