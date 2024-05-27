document.addEventListener('DOMContentLoaded', function() {
  // JavaScript to toggle the visibility of the training classes content
  document.getElementById('firstLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    document.getElementById('firstContent').style.display = 'block'; // Show the content for first training classes
    document.getElementById('secondContent').style.display = 'none'; // Hide the content for second training classes
  });

  document.getElementById('secondLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    document.getElementById('secondContent').style.display = 'block'; // Show the content for second training classes
    document.getElementById('firstContent').style.display = 'none'; // Hide the content for first training classes
  });

  // Show content for first link by default
  document.getElementById('firstContent').style.display = 'block';
  document.getElementById('secondContent').style.display = 'none'; // Hide content for second link
});
