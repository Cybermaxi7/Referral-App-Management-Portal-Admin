document.addEventListener("DOMContentLoaded", () => {
    const createBranch = document.getElementById("cancel");
    const redirectTo = "/branch/index.html"; // Specify the page to redirect to

    createBranch.addEventListener("click", () => {
        window.location.href = redirectTo;
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const createBranch = document.getElementById("clear");
    const redirectTo = "/branch/bulky.html"; // Specify the page to redirect to

    createBranch.addEventListener("click", () => {
        window.location.href = redirectTo;
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const table = document.getElementById("myTable");
    const redirectTo = "/branch/sample-original.html"; // Specify the page to redirect to

    table.addEventListener("click", () => {
        window.location.href = redirectTo;
    });
});





document.addEventListener("DOMContentLoaded", function() {
    // Get the modal
    var modal = document.getElementById("myModal2");

    // Get the button that opens the modal
    var openBtn = document.getElementById("openModalBtn2");

    // Get the button that closes the modal
    var closeBtn = document.getElementById("closeModalBtn2");

    // When the user clicks on the open button, open the modal
    openBtn.addEventListener("click", function(e) {
        e.preventDefault();
        modal.style.display = "flex";
    });

    // When the user clicks on the close button, close the modal and redirect to /branch/index.html
    closeBtn.addEventListener("click", function(e) {
        e.preventDefault();
        modal.style.display = "none";
        window.location.href = "/branch/index.html"; // Redirects to the desired page
    });

    // Optional: When the user clicks anywhere outside of the modal, close it
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            window.location.href = "/branch/upload.html"; // Redirects to the desired page
        }
    });
});
