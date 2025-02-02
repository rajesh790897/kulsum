document.getElementById('inviteButton').addEventListener('click', function () {
  const name = document.getElementById('nameInput').value.trim();
  if (name) {
    const message = document.getElementById('message');
    message.textContent = `${name}, you are invited to my 18th birthday! 🎉`;
    document.getElementById('invitationMessage').classList.remove('hidden');
  } else {
    alert('Please enter your name!');
  }
});

document.getElementById('addToCalendar').addEventListener('click', function () {
  alert('Event added to your calendar!');
  // You can integrate a calendar API here for actual functionality.
});

document.getElementById('downloadImage').addEventListener('click', function () {
  alert('Downloading invitation image...');
  // You can use a library like html2canvas to generate and download the image.
});