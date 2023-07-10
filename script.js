$(document).ready(function() {
    // Enable Bootstrap responsive behavior on touch devices
    $('[data-toggle="collapse"]').on('click touchstart', function() {
      var target = $(this).attr('data-target');
      $(target).toggleClass('show');
    });
  });
  