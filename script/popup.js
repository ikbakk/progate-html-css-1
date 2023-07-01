const imgContainers = document.querySelectorAll('.img-container');
const popup = document.querySelector('.popup');
const popupTitle = document.querySelector('.popup-title');
const popupDescription = document.querySelector('.popup-description');
const closeButton = document.querySelector('.close-button');

// Function to open the popup with the clicked image's description
const openPopup = description => {
  popupTitle.textContent = 'Short Description';
  popupDescription.textContent = description;
  popup.style.display = 'block';
};

// Function to close the popup
const closePopup = () => {
  popup.style.display = 'none';
};

// Add click event listeners to each img-container element
imgContainers.forEach(imgContainer => {
  imgContainer.addEventListener('click', () => {
    const description = imgContainer.dataset.description;
    openPopup(description);
  });
});

// Add click event listener to the close button
closeButton.addEventListener('click', closePopup);
