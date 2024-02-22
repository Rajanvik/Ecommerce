'use strict';

// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { modal.classList.add('closed') }

// modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);



// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
});

 // Get the form element
 const form = document.getElementById('newsletterForm');

 // Add event listener for form submission
 form.addEventListener('submit', (event) => {
   // Prevent default form submission
   event.preventDefault();

   // Perform form submission (You can add your own submission logic here)

   // Close the modal
   closeModal();
 });

 // Function to close the modal
 function closeModal() {
   const modal = document.querySelector('.modal');
   modal.style.display = 'none';
 }

