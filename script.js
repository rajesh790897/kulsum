// Event listener for the invite button
document.getElementById('inviteButton').addEventListener('click', function () {
  const name = document.getElementById('nameInput').value.trim();
  if (name) {
    const message = document.getElementById('message');
    message.textContent = `${name}, you are invited to Kulsum's 18th birthday! 🎉`;
    document.getElementById('invitationMessage').classList.remove('hidden');
  } else {
    alert('Please enter your name!');
  }
});

// Event listener for adding the event to Google Calendar
document.getElementById('addToCalendar').addEventListener('click', function () {
  const eventTitle = "Kulsum's 18th Birthday Party";
  const eventDetails = "Come celebrate Kulsum's birthday! 🎂🥳";
  const eventLocation = "Gadraja, Rajnagar, Birbhum";
  const startTime = "20250214T043000Z"; // 10 AM IST (converted to UTC)
  const endTime = "20250214T053000Z"; // 11 AM IST (converted to UTC)

  const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&details=${encodeURIComponent(eventDetails)}&location=${encodeURIComponent(eventLocation)}&dates=${startTime}/${endTime}`;

  window.open(googleCalendarUrl, "_blank");
});

// Event listener for downloading the image
document.getElementById('downloadImage').addEventListener('click', function () {
  const imageUrl = "https://raw.githubusercontent.com/rajesh790897/kulsum/refs/heads/main/Kulsum's%20Birthday%20Invitation%20Card.png"; // Replace with a working direct link

  // Fetch the image as a blob and trigger download
  fetch(imageUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.blob();
    })
    .then(blob => {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "Kulsum_Birthday_Invitation.png"; // The file name when downloaded
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
    .catch(error => {
      console.error('Error downloading the image:', error);
      alert('Failed to download the image. Please check the URL or try again later.');
    });
});
