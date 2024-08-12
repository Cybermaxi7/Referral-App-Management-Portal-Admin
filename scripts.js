// Sidebar Functionality
function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const isSidebarVisible = sidebar.classList.contains("sidebar-visible");
  console.log(`Sidebar is ${isSidebarVisible ? "visible" : "hidden"}`);

  // Toggle sidebar visibility
  sidebar.classList.toggle("sidebar-visible");

  // Adjust the content and navigation when sidebar is toggled
  if (isSidebarVisible) {
    document.querySelector(".main-content").style.marginLeft = "0";
    document.querySelector(".top-nav").style.left = "0";
    document.querySelector(".top-nav").style.width = "100%";
  } else {
    document.querySelector(".main-content").style.marginLeft = "29.4rem";
    document.querySelector(".top-nav").style.left = "29.4rem";
    document.querySelector(".top-nav").style.width = "calc(100% - 29.4rem)";
  }
}

// Add event listener to the hamburger menu
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  if (hamburgerMenu) {
    hamburgerMenu.addEventListener("click", toggleSidebar);
  } else {
    console.error("Hamburger menu button not found.");
  }
});

// Reset styles when the window is resized to avoid issues
window.addEventListener("resize", function () {
  const sidebar = document.querySelector(".sidebar");
  if (window.innerWidth > 991) {
    sidebar.classList.remove("sidebar-visible");
    document.querySelector(".main-content").style.marginLeft = "29.4rem";
    document.querySelector(".top-nav").style.left = "29.4rem";
    document.querySelector(".top-nav").style.width = "calc(100% - 29.4rem)";
  } else {
    document.querySelector(".main-content").style.marginLeft = "0";
    document.querySelector(".top-nav").style.left = "0";
    document.querySelector(".top-nav").style.width = "100%";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const activityBtn = document.getElementById("user-active-tab");
  const prospectBtn = document.getElementById("user-prospect-tab");
  const userActivity = document.getElementById("user-table-activity");
  const userProspect = document.getElementById("user-table-prospect");

  activityBtn.addEventListener("click", function (e) {
    e.preventDefault();
    userActivity.style.display = "block";
    userProspect.style.display = "none";
    activityBtn.style.backgroundColor = "white";
    activityBtn.style.color = "#002855";
    prospectBtn.style.backgroundColor = "#002855";
    prospectBtn.style.color = "white";
    activityBtn.style.textDecoration = "3px solid #002855";
  });

  prospectBtn.addEventListener("click", function (e) {
    e.preventDefault();
    userProspect.style.display = "block";
    userActivity.style.display = "none";
    prospectBtn.style.backgroundColor = "white";
    activityBtn.style.backgroundColor = "#002855";
    activityBtn.style.color = "white";
    prospectBtn.style.borderBottom = "3px solid #002855";
    prospectBtn.style.color = "#002855";
  });
});
