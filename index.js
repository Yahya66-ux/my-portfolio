// Get the form element
const form = document.querySelector('form');

// Add an event listener for form submission
form.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();
  
  // Get the input values
  const name = form.elements.name.value;
  const message = form.elements.message.value;
  
  // TODO: Send the form data to the server using AJAX or fetch
  
  // Reset the form
  form.reset();
  
  // Show a success message
  alert('Thanks for contacting us!');
});