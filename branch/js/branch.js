// Get the buttons and content elements
const allButtonPage1 = document.getElementById("allButtonPage1");
const activeButtonPage1 = document.getElementById("activeButtonPage1");
const myTable1 = document.getElementById("myTable");
const myTable2 = document.getElementById("myTable2");

// Function to switch content and apply active styles
function switchContent(buttonClicked) {
    if (buttonClicked === "all") {
        myTable1.style.display = "table"; // Show myTable1
        myTable2.style.display = "none"; // Hide myTable2
        allButtonPage1.classList.add("active-tab-style");
        activeButtonPage1.classList.remove("active-tab-style");
    } else if (buttonClicked === "active") {
        myTable1.style.display = "none"; // Hide myTable1
        myTable2.style.display = "table"; // Show myTable2
        allButtonPage1.classList.remove("active-tab-style");
        activeButtonPage1.classList.add("active-tab-style");
    }
}

// Add event listeners to the buttons
allButtonPage1.addEventListener("click", () => switchContent("all"));
activeButtonPage1.addEventListener("click", () => switchContent("active"));

// Add event listeners to the buttons
allButtonPage1.addEventListener("click", () => switchContent("all"));
activeButtonPage1.addEventListener("click", () => switchContent("active"));

// Initialize to show the first table by default
switchContent("all");

document.addEventListener("DOMContentLoaded", () => {
    const table = document.getElementById("myTable");
    const redirectTo = "/branch/sample-original.html"; // Specify the page to redirect to

    table.addEventListener("click", () => {
        window.location.href = redirectTo;
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const table = document.getElementById("myTable2");
    const redirectTo = "/branch/sample-original.html"; // Specify the page to redirect to

    table.addEventListener("click", () => {
        window.location.href = redirectTo;
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const createBranch = document.getElementById("create-branch");
    const redirectTo = "bulky.html"; // Specify the page to redirect to

    createBranch.addEventListener("click", () => {
        window.location.href = redirectTo;
    });
});
