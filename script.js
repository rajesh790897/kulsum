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

document.getElementById('addToCalendar').addEventListener('click', function () {
  const eventTitle = "Kulsum's 18th Birthday Party";
  const eventDetails = "Come celebrate Kulsum's birthday! 🎂🥳";
  const eventLocation = "Gadraja, Rajnagar, Birbhum";
  const startTime = "20250214T100000Z";
  const endTime = "20250214T110000Z";

  const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&details=${encodeURIComponent(eventDetails)}&location=${encodeURIComponent(eventLocation)}&dates=${startTime}/${endTime}`;

  window.open(googleCalendarUrl, "_blank");
});

document.getElementById('downloadImage').addEventListener('click', function () {
  const imageUrl = "https://raw.githubusercontent.com/rajesh790897/kulsum/refs/heads/main/Kulsum's%20Birthday%20Invitation%20Card.png"; // Change this to the correct file path or URL
  const link = document.createElement("a");
  link.href = imageUrl;
  link.download = "Kulsum_Birthday_Invitation.png"; // The file name when downloaded
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
