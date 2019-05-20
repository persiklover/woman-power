var handle = ally.style.focusWithin();

$(function() {

$('a[href^="#"]').click(function(e) {
  e.preventDefault();
  var el = $($(this).attr('href'));
  if (el.length) {
    $('html, body').animate({
      scrollTop: el.offset().top + 'px'
    }, 500);
  }
});

$('.faq-list-item__dropdown').toggleClass('hidden');
$('.faq-list-item__header').click(function() {
  $(this).toggleClass('active');
  $(this).next().toggleClass('hidden');
});

$(".feedback-slider").owlCarousel({
  centerMode: true,
  margin: 15,
  nav: true,
  // stagePadding: 30,
  loop: true,
  items: 1,
  responsive: {
    0: {
      autoHeight: true,
    },
    576: {
      autoHeight: false,
    }
  }
});

var t = 0;
if (localStorage.getItem('t')) {
  t = +localStorage.getItem('t');
}
else {
  t = 12 * 60 * 60;
}
var timeHTML = $('.about-timer__time');
setInterval(function() {
  t--;
  if (t < 0) {
    t = 0;
  }
  localStorage.setItem('t', t);
  var d = Math.floor(t / (24 * 60 * 60));
  if ((d + '').length < 2) {
    d = '0' + d;
  }
  else if ((d + '').length == 0) {
    d = '00';
  }
  var h = Math.floor(t / 60 / 60);
  if ((h+'').length < 2) {
    h = '0' + h;
  }
  var m = Math.floor(t / 60 % 60);
  if ((m + '').length < 2) {
    m = '0' + m;
  }
  var s = Math.floor(t % 60);
  if ((s + '').length < 2) {
    s = '0' + s;
  }
  timeHTML.text(d+':'+h+':'+m+':'+s);
}, 1000);

});
