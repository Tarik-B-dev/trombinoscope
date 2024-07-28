document.addEventListener('DOMContentLoaded', function () {
   const toggleButton = document.getElementById('switch-mode');
   toggleButton.addEventListener('click', function () {
      document.body.classList.toggle('light-mode');
      document.body.classList.toggle('dark-mode');
   });
});