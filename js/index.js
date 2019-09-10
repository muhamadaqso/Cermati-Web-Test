$('.alert').on('close.bs.alert', function(e) {

    e.stopPropagation();
  
    $(this).closest('.alert')
      .animate({
        height: 'toggle',
        opacity: 'toggle'
      });
  
  });

  window.onscroll = function() {myFunction()};

var notifTop = document.getElementsById("panel-top");
var sticky = notifTop.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    notifTop.classList.add("sticky");
  } else {
    notifTop.classList.remove("sticky");
  }
}

