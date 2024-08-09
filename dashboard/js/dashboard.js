document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("myChartt").getContext("2d");
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
                            size: 11, // Font size for y-axis labels
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
                            size: 11, // Font size for x-axis labels
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
