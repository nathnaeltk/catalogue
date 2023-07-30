$(document).ready(function() {
    // Enable Bootstrap responsive behavior on touch devices
    $('[data-toggle="collapse"]').on('click touchstart', function() {
      var target = $(this).attr('data-target');
      $(target).toggleClass('show');
    });
  });

  

    // Get all heart icon elements using their class
    const heartIcons = document.querySelectorAll('.heart-icon');

    // Add a click event listener to each heart icon
    heartIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            // Toggle the 'red' class to change the color to red
            icon.classList.toggle('red');
        });
    });

    

    // Add a click event listener to each heart icon
    heartIcons.forEach(icon => {
        icon.addEventListener('click', function () {
          
            var channelId = icon.dataset.channelId; 
            var userId = authenticatedUsername;

            // Send the channel ID to the backend API using AJAX
            $.ajax({
                type: 'POST', // Use 'POST' method for sending data
                url: '/favorite', // Replace this with your actual backend API endpoint
                data: {
                    userId: userId,
                    channelId: channelId
                },
                success: function (response) {
                    // Handle the response from the backend if needed
                    console.log('Favorite status updated successfully:', response);
                },
                error: function (error) {
                    // Handle the error if the request fails
                    console.error('Error updating favorite status:', error);
                }
            });
        });
    });