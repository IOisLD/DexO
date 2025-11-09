// Select the button

const followBtn = document.getElementById('followBtn');
// Listen for clicks
followBtn.addEventListener('click', function () {
// Check if currently 'Follow' or 'Following'
  if (followBtn.textContent === 'Follow') {
    followBtn.textContent = 'Following';
    followBtn.style.backgroundColor= 'gray';
    } else {
      followBtn.textContent = 'Follow';
      followBtn.style.backgroundColor = '#4CAF50';
    }
});