document.addEventListener("DOMContentLoaded", () => {
  // Button references
  const allBtn = document.getElementById("all-btn");
  const activeBtn = document.getElementById("active-btn");
  const suspendedBtn = document.getElementById("suspended-btn");
  const createUserBtn = document.getElementById("create-user-btn");

  // Function to set active button styles
  function setActiveButton(activeButton) {
    allBtn.style.backgroundColor = "#002855";
    allBtn.style.color = "#fff";
    activeBtn.style.backgroundColor = "#00b388";
    activeBtn.style.color = "#fff";
    suspendedBtn.style.backgroundColor = "#c61531";
    suspendedBtn.style.color = "#fff";

    if (activeButton === allBtn) {
      allBtn.style.backgroundColor = "#fff";
      allBtn.style.color = "#002855";
    } else if (activeButton === activeBtn) {
      activeBtn.style.backgroundColor = "#fff";
      activeBtn.style.color = "#002855";
    } else if (activeButton === suspendedBtn) {
      suspendedBtn.style.backgroundColor = "#c61531";
      suspendedBtn.style.color = "#fff";
    }
  }

  // Event listeners for buttons
  allBtn.addEventListener("click", () => setActiveButton(allBtn));
  activeBtn.addEventListener("click", () => setActiveButton(activeBtn));
  suspendedBtn.addEventListener("click", () => setActiveButton(suspendedBtn));

  // Redirect to create user page
  if (createUserBtn) {
    createUserBtn.addEventListener("click", () => {
      window.location.href = "/users/create-user.html";
    });
  }

  // Table row click navigation
  const tableRows = document.querySelectorAll(".user-list tbody tr");
  tableRows.forEach((row) => {
    row.addEventListener("click", () => {
      window.location.href = "/users/usersprofile.html";
    });
  });
});

// Show the popup when the "Update Profile" button is clicked
document
  .getElementById("update-profile-btn")
  .addEventListener("click", function () {
    document.getElementById("user-popup").style.display = "block";
  });

// Redirect to the user profile page when the "Close" button is clicked
document
  .getElementById("close-popup-btn")
  .addEventListener("click", function () {
    window.location.href = "usersprofile.html";
  });
