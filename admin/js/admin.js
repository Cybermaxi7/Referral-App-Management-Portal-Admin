const buttons = document.querySelectorAll(".left-container-inner button");
const settingsDisplay = document.getElementById("settings-display");

buttons.forEach((button) => {
    button.addEventListener("click", function () {
        // Hide all content sections
        document.querySelectorAll(".settings-content").forEach((content) => {
            content.classList.remove("active");
        });

        // Show the targeted content section
        const target = button.getAttribute("data-target");
        const targetContent = document.getElementById(target);
        if (targetContent) {
            targetContent.classList.add("active");
        }
    });
});
