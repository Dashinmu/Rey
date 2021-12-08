var swiper = new Swiper('.swiper1', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 1,

  pagination: {
      el: '.swiper-pagination1',
      clickable: true,

  },
  navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
  },

});


var swiper2 = new Swiper('.swiper2', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 1,

  pagination: {
      el: '.swiper-pagination2',
      type: 'progressbar',
  },
  navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
  },

});

var swiper3 = new Swiper('.swiper3', {
  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 1,

  pagination: {
      el: '.swiper-pagination3',
      type: 'progressbar',
  },
  navigation: {
      nextEl: '.swiper-button-next3',
      prevEl: '.swiper-button-prev3',
  },

});

var swiper4 = new Swiper('.swiper', {
  direction: 'horizontal',
  slidesPerView: 4,
  slidesPerGroup: 1,
  spaceBetween: 2,
  
  pagination: {
      el: '.swiper-pagination4',
      type: 'progressbar',
  },
  navigation: {
      nextEl: '.swiper-button-next4',
      prevEl: '.swiper-button-prev4',
  },
});

/*   const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerGroup: 1,
    
    
    breakpoints: {
      '@0.00': {
        slidesPerView: 1,
      },
      '@1.38': {
        slidesPerView: 2,
      },
      '@2.26': {
        slidesPerView: 3,
      },
      '@3.01': {
        slidesPerView: 4,
      },
    },

    pagination: {
        el: '.swiper-pagination',
    },
  
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
        el: '.swiper-scrollbar',
    },
  }); */

  
/* }  *//* else if (document.documentElement.clientWidth > 768) {
  const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 1,
  
    pagination: {
        el: '.swiper-pagination',
    },
  
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
        el: '.swiper-scrollbar',
    },
  });
} else if (document.documentElement.clientWidth > 468) {
  const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 2,
    slidesPerGroup: 1,
  
    pagination: {
        el: '.swiper-pagination',
    },
  
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
        el: '.swiper-scrollbar',
    },
  });
}*/ /* else {
    const swiper = new Swiper('.swiper', {
      loop: true,
      slidesPerView: 1,
      slidesPerGroup: 1,
    
      pagination: {
          el: '.swiper-pagination',
      },
    
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
    
      scrollbar: {
          el: '.swiper-scrollbar',
      },
    });
}
 */



function openModal() {
  document.getElementById('myModal').style.display = "flex";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 0;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "flex";
}