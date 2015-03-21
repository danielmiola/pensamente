$('#nav').affix({
      offset: {
        top: $('header').height()
      }
});	

$('#sidebar').affix({
      offset: {
        top: 400
      }
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})