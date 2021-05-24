//typing amination
let myName = document.getElementById('name');
const text = myName.textContent;
let index = 0;
function typeName() {
  myName.textContent = text.slice(0, index);
  index++;
  if (index > text.length - 1) {
    index = 0;
  }
}

setInterval(typeName, 500);

$(document).ready(function () {
  $('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load', function () {
    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');
  });
});
