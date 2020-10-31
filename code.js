$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
})


$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

var submitted=false;

function validateName() {
        var name = document.getElementById('name').value;
        if(name.length == 0) {
          alert("Name can't be blank") ;
          return false;

        }
        if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
          alert("Please enter your correct name") ;//Validation Message
          return false;
        }
        return true;
      }

    function validateForm() {
      if (!validateName()) {

        alert("Form not submitted");//Validation Message
        return false;
      }
      else {
        submitted=true;
        alert("Your Response is recorded.");
        return true;
      }
    }
