document.addEventListener("DOMContentLoaded", function () {
    // Content toggling based on radio buttons
    const content1 = document.getElementById("content1");
    const content2 = document.getElementById("content2");
    const userFormRadio = document.getElementById("user-individual-radio");
    const bulkUploadRadio = document.getElementById("user-bulk-upload-radio");

    userFormRadio.checked = true;
    content1.style.display = "block";
    content2.style.display = "none";

    bulkUploadRadio.addEventListener("change", () => {
        content2.style.display = "block";
        content1.style.display = "none";
    });

    userFormRadio.addEventListener("change", () => {
        content2.style.display = "none";
        content1.style.display = "block";
    });
});
