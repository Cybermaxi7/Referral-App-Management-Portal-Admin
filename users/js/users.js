document.addEventListener("DOMContentLoaded", () => {
  const allBtn = document.getElementById("all-btn");
  const activeBtn = document.getElementById("active-btn");
  const suspendedBtn = document.getElementById("suspended-btn");
  const createUserBtn = document.getElementById("create-user-btn");
  const userManagementPage = document.getElementById("user-management");
  const createUserPage = document.getElementById("create-user");

  function setActiveButton(activeButton) {
    allBtn.style.backgroundColor = "#002855";
    allBtn.style.color = "#fff";
    activeBtn.style.backgroundColor = "#00b388";
    activeBtn.style.color = "#fff";
    suspendedBtn.style.backgroundColor = "#c61531";
    suspendedBtn.style.color = "#fff";

    if (activeButton === allBtn) {
      allBtn.style.backgroundColor = "#fff";
      allBtn.style.color = "#002855";
    } else if (activeButton === activeBtn) {
      activeBtn.style.backgroundColor = "#fff";
      activeBtn.style.color = "#002855";
    } else if (activeButton === suspendedBtn) {
      suspendedBtn.style.backgroundColor = "#fff";
      suspendedBtn.style.color = "#002855";
    }
  }

  allBtn.addEventListener("click", () => {
    setActiveButton(allBtn);
  });

  activeBtn.addEventListener("click", () => {
    setActiveButton(activeBtn);
  });

  suspendedBtn.addEventListener("click", () => {
    setActiveButton(suspendedBtn);
  });

  createUserBtn.addEventListener("click", () => {
    userManagementPage.classList.add("hidden");
    createUserPage.classList.remove("hidden");
  });

  const tableRows = document.querySelectorAll(".user-list tbody tr");
  tableRows.forEach((row) => {
    row.addEventListener("click", () => {
      window.location.href = "usersprofile.html";
    });
  });

  document
    .getElementById("bulk-upload-radio")
    .addEventListener("change", function () {
      if (this.checked) {
        window.location.href = "bulkupload.html";
      }
    });
});

document
  .getElementById("individual-radio")
  .addEventListener("change", function () {
    if (this.checked) {
      window.location.href = "createuser.html";
    }
  });
