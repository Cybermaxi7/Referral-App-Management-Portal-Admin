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
