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
  const startTime = "20250214T1000000Z";
  const endTime = "20250210T110000Z";

  const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&details=${encodeURIComponent(eventDetails)}&location=${encodeURIComponent(eventLocation)}&dates=${startTime}/${endTime}`;

  window.open(googleCalendarUrl, "_blank");
});

document.getElementById('downloadImage').addEventListener('click', function () {
  alert('Downloading invitation image...');
  // This will redirect to the Canva design
  window.location.href = "https://www.canva.com/design/DAGd8p32jW8/djSKvc19faVN8jTje4ZU0Q/view?utm_content=DAGd8p32jW8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha6509a30d9";
});
