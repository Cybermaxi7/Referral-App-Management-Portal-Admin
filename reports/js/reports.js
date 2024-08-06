document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("myChart").getContext("2d");
    const myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            datasets: [
                {
                    label: "",
                    data: [200, 300, 250, 800, 300, 600, 600],
                    fill: false,
                    borderColor: "#7DC6FA",
                    tension: 0.4,
                    pointBackgroundColor: "#0095FF",
                    pointRadius: 0, // Dots are hidden initially
                    pointHoverRadius: 7, // Dots appear on hover
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 1000,
                    ticks: {
                        stepSize: 500,
                        font: {
                            size: 12, // Font size for y-axis labels
                            family: "Circular Std", // Font family for y-axis labels
                            weight: 450, // Font weight for y-axis labels
                        },
                        color: "#898CAA",
                    },
                    grid: {
                        display: false, // Hide vertical grid lines
                    },
                    border: {
                        display: false, // Hide vertical axis border line
                    },
                },
                x: {
                    ticks: {
                        font: {
                            size: 12, // Font size for x-axis labels
                            family: "Circular Std", // Font family for x-axis labels
                            weight: 450, // Font weight for x-axis labels
                        },
                        color: "#898CAA",
                    },
                    grid: {
                        display: false, // Hide horizontal grid lines
                    },
                    border: {
                        display: false, // Hide horizontal axis border line
                    },
                },
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    enabled: true,
                    position: "nearest", // Ensure the tooltip appears nearest to the hovered point
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    titleColor: "#000",
                    bodyColor: "#0E1566",
                    borderColor: "rgba(2, 24, 103, 0.1)",
                    borderWidth: 1,
                    cornerRadius: 4,
                    caretSize: 6,
                    padding: 8,
                    displayColors: false,
                    yAlign: "center", // Vertical alignment of the tooltip
                    xAlign: "right", // Align tooltip to the right
                    callbacks: {
                        label: function (context) {
                            return context.raw.toString(); // Show only the data value as a string
                        },
                        title: function () {
                            return ""; // Hide the title (label)
                        },
                    },
                    titleFont: {
                        size: 16, // Font size for tooltip titles
                        family: "Circular Std", // Font family for tooltip titles
                    },
                    bodyFont: {
                        size: 14, // Font size for tooltip body text
                        family: "Circular Std", // Font family for tooltip body text
                    },
                },
            },
            hover: {
                onHover: function (event, elements) {
                    const chart = this;
                    const xAxisTicks = chart.scales.x.ticks;

                    // Reset all ticks to normal weight
                    xAxisTicks.forEach((tick) => {
                        tick.font.weight = "normal";
                    });

                    // If hovering over a point, make the corresponding x-axis label bold
                    if (elements.length) {
                        const index = elements[0].index;
                        xAxisTicks[index].font.weight = "bolder";
                        chart.update();
                    }
                },
                mode: "index", // Ensures hover interacts with the closest point
                intersect: false, // Ensures hover affects multiple points (if necessary)
            },
        },
    });
});

// Modal for Create Report
document.addEventListener("DOMContentLoaded", function () {
    const openModalButton = document.getElementById("openCreateReportModalBtn");
    const modal = document.getElementById("modal");
    const modalOverlay = document.getElementById("modal-overlay");
    const modalClose = document.getElementById("modal-close");

    // Open Modal Function
    function openModal() {
        modal.style.display = "block";
        modalOverlay.style.display = "block";
        console.log("first");
    }

    // Close Modal Function
    function closeModal() {
        modal.style.display = "none";
        modalOverlay.style.display = "none";
    }

    // Event Listeners
    openModalButton.addEventListener("click", openModal);
    modalClose.addEventListener("click", closeModal);
    modalOverlay.addEventListener("click", closeModal);
});

document.addEventListener("DOMContentLoaded", function () {
    // Function to select all checkboxes
    document
        .querySelector(".select-buttons p:first-child")
        .addEventListener("click", () => {
            const checkboxes = document.querySelectorAll(
                'input[id^="cbx-"]:not(#cbx-46)'
            );
            checkboxes.forEach((checkbox) => (checkbox.checked = true));
        });

    // Function to unselect all checkboxes except cbx-46
    document
        .querySelector(".select-buttons p:last-child")
        .addEventListener("click", () => {
            const checkboxes = document.querySelectorAll(
                'input[id^="cbx-"]:not(#cbx-46)'
            );
            checkboxes.forEach((checkbox) => (checkbox.checked = false));
        });
});

// Code to show either of the with recurrent reporting or withour recurrent reporting containers
document.querySelector("#cbx-46").addEventListener("change", function () {
    const withContainer = document.querySelector(
        ".with-recurrent-reporting-container"
    );
    const withoutContainer = document.querySelector(
        ".without-recurrent-reporting-container"
    );

    if (this.checked) {
        withContainer.style.display = "block";
        withoutContainer.style.display = "none";
    } else {
        withContainer.style.display = "none";
        withoutContainer.style.display = "block";
    }
});

// Show the success create report modal
document
    .getElementById("modal-create-report")
    .addEventListener("click", function () {
        document.querySelector(".report-create-success-modal").style.display =
            "flex"; // Show the modal
        document.querySelector("#modal").style.zIndex = 3; // Show the overlay
    });

// Hiding Other components and showing the View All Reports Container
document.addEventListener("DOMContentLoaded", function () {
    // Get the view-all-reports button
    const viewAllReportsButton = document.querySelector(".view-all-reports");

    // Add a click event listener to the button
    viewAllReportsButton.addEventListener("click", function () {
        // Hide the reports-card-grid, reports-overview, and summary-widgets
        document.querySelector(".reports-card-grid").style.display = "none";
        document.querySelector(".reports-overview").style.display = "none";
        document.querySelector(".summary-widgets").style.display = "none";

        // Show the view-all-reports-container
        document.querySelector(".view-all-reports-container").style.display =
            "block";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const threeDots = document.querySelectorAll(".three-dot");

    threeDots.forEach((dot) => {
        dot.addEventListener("click", function (event) {
            event.stopPropagation();

            // Close any open dropdowns that are not related to the clicked dot
            document
                .querySelectorAll(".dropdown.active")
                .forEach((dropdown) => {
                    if (dropdown !== dot.nextElementSibling) {
                        dropdown.classList.remove("active");
                    }
                });

            // Toggle the dropdown menu for the clicked dot
            const dropdown = dot.nextElementSibling;
            dropdown.classList.toggle("active");
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function () {
        document.querySelectorAll(".dropdown.active").forEach((dropdown) => {
            dropdown.classList.remove("active");
        });
    });
});

// Hiding Other components and showing the Sales Reports Container
document.addEventListener("DOMContentLoaded", function () {
    // Get the view-all-reports button
    const resultsRow = document.querySelectorAll(".results-row");
    const salesReportContainer = document.querySelector(
        ".sales-report-container"
    );
    const openCreateReportModalBtn = document.getElementById(
        "openCreateReportModalBtn"
    );

    // Add a click event listener to the button
    resultsRow.forEach((button) => {
        button.addEventListener("click", function () {
            // Hide the reports-card-grid, reports-overview, and summary-widgets
            document.querySelector(".reports-card-grid").style.display = "none";
            document.querySelector(".reports-overview").style.display = "none";
            document.querySelector(".summary-widgets").style.display = "none";

            // Hide the view-all-reports-container
            document.querySelector(
                ".view-all-reports-container"
            ).style.display = "none";
            // Show the sales-reports-container
            salesReportContainer.style.display = "block";
            const filterContainerSales = document.querySelector(
                ".filter-container-sales"
            );
            if (salesReportContainer.style.display == "block") {
                openCreateReportModalBtn.style.display = "none";
                filterContainerSales.style.display = "flex";
            }
        });
    });
});

// Second Chart
document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("myChart-2").getContext("2d");

    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
            {
                label: "Motor",
                data: [137, 181, 57, 127, 169, 80, 21],
                backgroundColor: "#8dd3c7",
            },
            {
                label: "Term Life",
                data: [83, 110, 113, 39, 111, 153, 83],
                backgroundColor: "#ffffb3",
            },
            {
                label: "Group Life",
                data: [70, 75, 54, 153, 127, 43, 127],
                backgroundColor: "#bebada",
            },
            {
                label: "Leadway Savings",
                data: [68, 165, 183, 185, 42, 100, 61],
                backgroundColor: "#fb8072",
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: "right",
                labels: {
                    boxWidth: 20,
                    padding: 15,
                },
            },
            datalabels: {
                anchor: "end",
                align: "start",
                color: "#333333",
                font: {
                    weight: "900",
                    size: 9,
                    family: "Circular Std",
                },
            },
        },
        scales: {
            x: {
                beginAtZero: true,
                categoryPercentage: 0.9, // Adjusts space between groups of bars (one month to the next)
                barPercentage: 0.9, // Adjusts the width of the bars
                ticks: {
                    font: {
                        size: 12,
                        weight: 700,
                        family: "Circular Std",
                    },
                },
            },
            y: {
                beginAtZero: true,
                max: 180,
                ticks: {
                    stepSize: 20,
                    font: {
                        size: 12,
                        weight: 700,
                        family: "Circular Std",
                    },
                },
                title: {
                    display: true,
                    text: "Amount ('000)",
                    font: {
                        size: 12,
                        weight: 450,
                        family: "Circular Std",
                    },
                },
            },
        },
    };

    const myChart = new Chart(ctx, {
        type: "bar",
        data: data,
        options: options,
        plugins: [ChartDataLabels],
    });
});

// switching between the charts (1)

document.addEventListener("DOMContentLoaded", function () {
    const chartHeadingRightButton = document.querySelector("#back-to-reports");
    const chartContainerInner = document.querySelector(
        ".chart-container-inner"
    );
    const chartContainerInner2 = document.querySelector(
        ".chart-container-inner-2"
    );

    chartHeadingRightButton.addEventListener("click", function () {
        // Toggle visibility
        chartContainerInner.style.display = "block";
        chartContainerInner2.style.display = "none";
    });
});
// switching between the charts (2)

document.addEventListener("DOMContentLoaded", function () {
    const chartHeadingRightButton = document.querySelector("#income-breakdown");
    const chartContainerInner = document.querySelector(
        ".chart-container-inner"
    );
    const chartContainerInner2 = document.querySelector(
        ".chart-container-inner-2"
    );

    chartHeadingRightButton.addEventListener("click", function () {
        // Toggle visibility
        chartContainerInner.style.display = "none";
        chartContainerInner2.style.display = "block";
    });
});

// third chart
document.addEventListener("DOMContentLoaded", function () {
    var options = {
        series: [
            {
                name: "VAT @ 7.5% of Fee",
                data: [10000, 30000, 65023.26, 169302.33],
            },
            {
                name: "Fee (Net of Probate)",
                data: [750, 8000, 4876.74, 12697.67],
            },
            {
                name: "Probate Fee",
                data: [0, 10000, 10000, 10000],
            },
        ],
        chart: {
            type: "bar",
            height: 400,
            width: "100%",
            stacked: true,
            toolbar: {
                show: true,
            },
            zoom: {
                enabled: true,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 0,
                columnWidth: "30%",
                dataLabels: {
                    position: "center", // Position the data labels at the center of the bar
                },
            },
        },
        dataLabels: {
            enabled: true,
            style: {
                colors: ["#000"], // Set data label color to black
                fontSize: "10px",
                fontWeight: 600,
            },
            background: {
                enabled: false, // Disable background for data labels
            },
        },
        xaxis: {
            categories: ["Motor", "Term Life", "Group Life", "Leadway Savings"],
            labels: {
                style: {
                    fontSize: "6px",
                    fontWeight: 450,
                    fontFamily: "Circular Std",
                    color: "#000",
                },
            },
            title: {
                text: "Products",
                style: {
                    fontSize: "8px",
                    fontWeight: 450,
                    fontFamily: "Circular Std",
                    color: "#000",
                },
            },
        },
        yaxis: {
            labels: {
                style: {
                    fontSize: "8px",
                    fontWeight: 450,
                    fontFamily: "Circular Std",
                    color: "#000",
                },
            },
            title: {
                text: "Amount (₦)",
                style: {
                    fontSize: "8px",
                    fontWeight: 450,
                    color: "#000",
                    fontFamily: "Circular Std",
                },
            },
        },
        legend: {
            position: "right",
            offsetY: 40,
            fontSize: "7px",
            fontWeight: "450",
            fontFamily: "Circular Std",
            labels: {
                colors: "#000",
                formatter: function (seriesName, opts) {
                    const reorderedLabels = [
                        "Probate Fee",
                        "Fee (Net of Probate)",
                        "VAT @ 7.5% of Fee",
                    ];
                    return reorderedLabels[opts.seriesIndex];
                },
            },
        },
        fill: {
            opacity: 1,
        },
        colors: ["#8dd3c7", "#fb8072", "#bebada"],
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
});

// Going back to the reports
document.addEventListener("DOMContentLoaded", function () {
    const backToReportsPage = document.querySelector(".back-to-report-p");
    const salesReportContainer = document.getElementById(
        "sales-report-container"
    );
    backToReportsPage.addEventListener("click", function () {
        // Show the reports-card-grid, reports-overview, and summary-widgets
        document.querySelector(".reports-card-grid").style.display = "grid";
        document.querySelector(".reports-overview").style.display = "grid";
        document.querySelector(".summary-widgets").style.display = "grid";
        salesReportContainer.style.display = "none";
    });
});

// Modal for Export Report
document.addEventListener("DOMContentLoaded", function () {
    const openModalButton = document.getElementById("openExportReportModalBtn");
    const modal = document.getElementById("modal-export");
    const modalOverlay = document.getElementById("modal-overlay");
    const modalClose = document.querySelectorAll(".modal-close");

    // Open Modal Function
    function openModal() {
        modal.style.display = "block";
        modalOverlay.style.display = "block";
        console.log("first");
    }

    // Close Modal Function
    function closeModal() {
        modal.style.display = "none";
        modalOverlay.style.display = "none";
    }

    // Event Listeners
    openModalButton.addEventListener("click", openModal);
    modalClose.forEach((close) => close.addEventListener("click", closeModal));
    modalOverlay.addEventListener("click", closeModal);
});

// Code to show either of the with recurrent reporting or withour recurrent reporting containers for exporting
document.querySelector("#cbx-467").addEventListener("change", function () {
    const withContainer = document.querySelector(".export-with");
    const withoutContainer = document.querySelector(".export-without");

    if (this.checked) {
        withContainer.style.display = "block";
        withoutContainer.style.display = "none";
    } else {
        withContainer.style.display = "none";
        withoutContainer.style.display = "block";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Function to select all checkboxes
    document
        .querySelector(".export-select-buttons p:first-child")
        .addEventListener("click", () => {
            const checkboxes = document.querySelectorAll(
                'input[id^="cbx-"]:not(#cbx-467)'
            );
            checkboxes.forEach((checkbox) => (checkbox.checked = true));
        });

    // Function to unselect all checkboxes except cbx-46
    document
        .querySelector(".export-select-buttons p:last-child")
        .addEventListener("click", () => {
            const checkboxes = document.querySelectorAll(
                'input[id^="cbx-"]:not(#cbx-467)'
            );
            checkboxes.forEach((checkbox) => (checkbox.checked = false));
        });
});

// Show the success export report modal
document
    .getElementById("modal-export-report")
    .addEventListener("click", function () {
        document.querySelector(".report-export-success-modal").style.display =
            "flex"; // Show the modal
        document
            .querySelectorAll(".modal")
            .forEach((modal) => (modal.style.zIndex = 3)); // Show the overlay
    });

// Show the sales report container
document.addEventListener("DOMContentLoaded", function () {
    // Get the view-all-reports button
    const goToReportsView = document.querySelectorAll(".go-to-reports-view");
    const salesReportContainer = document.querySelector(
        ".sales-report-container"
    );
    // Add a click event listener to the button
    goToReportsView.forEach((button) =>
        button.addEventListener("click", function () {
            // Hide the reports-card-grid, reports-overview, and summary-widgets
            document.querySelector(".reports-card-grid").style.display = "none";
            document.querySelector(".reports-overview").style.display = "none";
            document.querySelector(".summary-widgets").style.display = "none";

            // Show the view-all-reports-container
            salesReportContainer.style.display = "block";
        })
    );
    const filterContainerSales = document.querySelector(
        ".filter-container-sales"
    );

    const openCreateReportModalBtn = document.getElementById(
        "openCreateReportModalBtn"
    );

    if (salesReportContainer.style.display == "block") {
        openCreateReportModalBtn.style.display = "none";
        filterContainerSales.style.display = "flex";
    }
});
