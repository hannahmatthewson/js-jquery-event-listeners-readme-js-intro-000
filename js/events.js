$(document).ready(function() {

function getIt() {
  $('p').on('click', function() {
    alert("Hey!")
  }
});

function frameIt() {
  $('img').on('load', function() {
    ($( "img" ).addClass('tasty')
  })
}

function pressIt() {
  $('input').on('keydown', function(key) {
    if(key.which == 71){
        alert('G was pressed');
    }
  })
}

function submitIt() {
  $("form").on("submit", function() {
    alert('your form is going to be submitted now');
  });
}

getIt()
frameIt()
submitIt()
pressIt()

});
