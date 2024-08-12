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

document.getElementById("suspendBtn").addEventListener("click", function () {
  var status = document.getElementById("status");
  var btn = document.getElementById("suspendBtn");

  if (btn.textContent.trim() === "Suspend") {
    status.textContent = "Suspended";
    status.style.color = "#c61531";
    btn.textContent = "Re-Activate";
    btn.style.backgroundColor = "#00b388";
  } else {
    status.textContent = "Active";
    status.style.color = "#00b388";
    btn.textContent = "Suspend";
    btn.style.backgroundColor = "#c61531";
  }
});
