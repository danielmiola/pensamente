$('#nav').affix({
      offset: {
        top: $('header').height()+10
      }
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})