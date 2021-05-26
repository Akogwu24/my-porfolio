//typing amination
let myName = document.getElementById('name');
const names = ['Akogwu ', 'Emmanuel ', 'Ugbede '];
let index = 0;
let i = 0;
function typeName() {
  let text = names[i];
  myName.textContent = text.slice(0, index);

  index++;
  if (index > text.length - 1) {
    index = 0;
    i++;
    if (i > 2) {
      i = 0;
    }
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
