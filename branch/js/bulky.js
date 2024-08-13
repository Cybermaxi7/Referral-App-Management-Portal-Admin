document.addEventListener("DOMContentLoaded", () => {
    const content1 = document.getElementById("content1");
    const content2 = document.getElementById("content2");
    const branchForm = document.getElementById("branch-form");
    const bulkUploadSection = document.getElementById("bulk-upload-section");

    // Ensure content1 is checked and shows the form by default
    content1.checked = true;
    branchForm.style.display = "block";
    bulkUploadSection.style.display = "none";

    content1.addEventListener("change", () => {
        if (content1.checked) {
            branchForm.style.display = "block";
            bulkUploadSection.style.display = "none";
        }
    });

    content2.addEventListener("change", () => {
        if (content2.checked) {
            branchForm.style.display = "none";
            bulkUploadSection.style.display = "block";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const openFileManager = document.getElementById("openFileManager");
    const fileInput = document.getElementById("fileInput");

    openFileManager.addEventListener("click", () => {
        fileInput.click();
    });

    // Handle the file selection and navigate to another page
    fileInput.addEventListener("change", (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            console.log("Selected file:", selectedFile);
            // Navigate to another page after selecting an image
            window.location.href = "/branch/upload.html";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const createBranch = document.getElementById("myCancel");
    const createBranch2 = document.getElementById("myCancel2");
    const redirectTo = "/branch/index.html"; // Specify the page to redirect to

    if(createBranch) {
        createBranch.addEventListener("click", () => {
            window.location.href = redirectTo;
        });
    }
    createBranch2.addEventListener("click", () => {
        window.location.href = "/prospects/index.html"
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var openBtn = document.getElementById("openModalBtn");

    // Get the button that closes the modal
    var closeBtn = document.getElementById("closeModalBtn");

    // When the user clicks on the open button, open the modal
    openBtn.addEventListener("click", function (e) {
        e.preventDefault();
        modal.style.display = "flex";
    });

    // When the user clicks on the close button, close the modal and redirect to /branch/index.html
    closeBtn.addEventListener("click", function (e) {
        e.preventDefault();
        modal.style.display = "none";
        window.location.href = "/branch/index.html"; // Redirects to the desired page
    });

    // Optional: When the user clicks anywhere outside of the modal, close it
    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            window.location.href = "/branch/bulky.html"; // Redirects to the desired page
        }
    });
});
