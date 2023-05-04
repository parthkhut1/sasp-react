/* add/remove headerfixed */
$(document).ready(function() {
  $(window).scroll(function() {
   if ($(document).scrollTop() > 31) {
        $("header").addClass("headerfixed");
      } else {
  $("header").removeClass("headerfixed");
      }
    });
});

/* scroll-to-top button */
$(document).ready(function(){
  var scrollToTopBtn = document.querySelector("#scrollToTopBtn");
  var rootElement = document.getElementsByClassName("showBtn");    
  function handleScroll() {
    var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    if (rootElement.scrollTop / scrollTotal > 0.3) {
      scrollToTopBtn?.classList.add("showBtn");
    } else {
      scrollToTopBtn?.classList.remove("showBtn");
    }
  }    
  function scrollToTop() {
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  if(scrollToTopBtn){        
      scrollToTopBtn.addEventListener("click", scrollToTop);
  }
  document.addEventListener("scroll", handleScroll);
});



$('.owl-brand').owlCarousel({
  loop:true,
  nav:false,
dots:true,
  responsive:{
      0:{
          items:1,
          margin:-22
      },
      375:{
        items:2,
        margin:-14
    },
      576:{
          items:3,
          margin:-14
      },
      992:{
          items:4,
          margin:-14
      },
      1200:{
          items:5,
          margin:-14
      }
  }
})

$('.owl-product').owlCarousel({
loop:true,
margin:33,
nav:false,
dots:true,
responsive:{
    0:{
        items:1
    },
    481:{
        items:2
    },
    1024:{
        items:3
    }
}
})

$('.owl-major').owlCarousel({
loop:true,
margin:37,
nav:false,
dots:true,
responsive:{
    0:{
        items:2
    },
   480:{
      items:3
  },
    600:{
        items:4
    },
    1000:{
        items:5
    }
}
})

$('.owl-feed').owlCarousel({
loop:true,
margin:20,
nav:false,
dots:true,
responsive:{
  0:{
      items:1
  },
  576:{
    items:1.2
  },
  768:{
      items:1.5
  },
  992:{
      items:1
  }
}
})



      $(function() {
          $(document).click(function (event) {
            $('.navbar-collapse').collapse('hide');
          });
          $('.navbar-collapse').click(function (event) {event.stopPropagation();});
        });  
    
   

  

  
        $(window).scroll(function() {
          if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#stop').fadeIn(200);    // Fade in the arrow
          } else {
            $('#stop').fadeOut(200);   // Else fade out the arrow
          }
        });
        $(document).on('click','#stop',function() {      // When arrow is clicked
            $('body,html').animate({
                scrollTop : 0                       // Scroll to top of body
            }, 500);
        });









  