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
