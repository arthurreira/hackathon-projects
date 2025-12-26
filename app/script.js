document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.view-project-btn');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      alert('Navigating to project page... (This is a mockup).');
    });
  });
});