document.addEventListener("DOMContentLoaded", () => {
    const userBtn = document.getElementById("userBtn");
    const prospectBtn = document.getElementById("prospectBtn");
    const tableOne = document.getElementById("table-one");
    const tableTwo = document.getElementById("table-two");

    function activateButton(buttonToActivate) {
        // Remove 'active' class from both buttons
        userBtn.classList.remove("active");
        prospectBtn.classList.remove("active");

        // Add 'active' class to the clicked button
        buttonToActivate.classList.add("active");
    }

    userBtn.addEventListener("click", () => {
        tableOne.style.display = "block";
        tableTwo.style.display = "none";
        activateButton(userBtn);
    });

    prospectBtn.addEventListener("click", () => {
        tableOne.style.display = "none";
        tableTwo.style.display = "block";
        activateButton(prospectBtn);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const suspendBtn = document.getElementById("suspendBtn");
    const tableTwo = document.getElementById("table-two");
    const tableOne = document.getElementById("table-one");
    function activateButton(buttonToActivate) {
        // Remove 'active' class from both buttons
        userBtn.classList.remove("active");
        prospectBtn.classList.remove("active");

        // Add 'active' class to the clicked button
        buttonToActivate.classList.add("active");
    }

    suspendBtn.addEventListener("click", () => {
        if (suspendBtn.classList.contains("green")) {
            suspendBtn.classList.remove("green");
            suspendBtn.textContent = "Suspend";

            suspendBtn.classList.add("red");
        } else {
            suspendBtn.classList.remove("red");
            suspendBtn.classList.add("green");
            suspendBtn.textContent = "Re-activate";
            tableOne.style.display = "none";
            tableTwo.style.display = "block";
            activateButton(prospectBtn);
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const createBranch = document.getElementById("myBack");
    const redirectTo = "/branch/index.html"; // Specify the page to redirect to

    createBranch.addEventListener("click", () => {
        window.location.href = redirectTo;
    });
});
