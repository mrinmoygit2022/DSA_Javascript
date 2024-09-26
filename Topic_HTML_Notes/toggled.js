 // Function to toggle visibility of one content section at a time and update the arrow
 function toggleContent(section) {
  const sections = ['objects', 'map', 'differences']; // List of all sections
  sections.forEach(sec => {
    const content = document.getElementById(sec);
    const arrow = document.getElementById(sec + '-arrow');
    if (sec === section) {
      // Toggle the clicked section
      if (content.style.display === "block") {
        content.style.display = "none";
        arrow.innerHTML = "▼"; // Down arrow
      } else {
        content.style.display = "block";
        arrow.innerHTML = "▲"; // Up arrow
      }
    } else {
      // Hide all other sections
      content.style.display = "none";
      document.getElementById(sec + '-arrow').innerHTML = "▼"; // Down arrow for closed sections
    }
  });
}

// Function to mark a section as read
function markAsRead(section) {
  const status = document.getElementById(section + "-status");
  status.innerHTML = "(Read)";
  status.classList.add("read");
}