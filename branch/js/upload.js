document.addEventListener("DOMContentLoaded", () => {
    const createBranch = document.getElementById("create");
    const redirectTo = "index.html"; // Specify the page to redirect to

    createBranch.addEventListener("click", () => {
        window.location.href = redirectTo;
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const createBranch = document.getElementById("clear");
    const redirectTo = "bulky.html"; // Specify the page to redirect to

    createBranch.addEventListener("click", () => {
        window.location.href = redirectTo;
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const table = document.getElementById("myTable");
    const redirectTo = "sample-original.html"; // Specify the page to redirect to

    table.addEventListener("click", () => {
        window.location.href = redirectTo;
    });
});
