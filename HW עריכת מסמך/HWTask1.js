const data = [
    {
        title: "Event 1",
        image: "https://picsum.photos/400/200?random=9",
        date: "SEP 19, 2025",
    },
    {
        title: "Event 2",
        image: "https://picsum.photos/400/200?random=10",
        date: "DEC 23, 2026",
    },
    {
        title: "Event 3",
        image: "https://picsum.photos/400/200?random=11",
        date: "JUN 6, 2028",
    },
    {
        title: "Event 4",
        image: "https://picsum.photos/400/200?random=12",
        date: "FEB 2, 2030",
    }
];

const eventsGrid = document.getElementById("eventsGrid");

data.forEach(elem => {
    let imgDiv = document.createElement("div");

    imgDiv.className = "image-wrapper";

    imgDiv.innerHTML = `
        <img src="${elem.image}" alt="${elem.title} image" class="image" />
        <div class="details">
            <p>${elem.date}</p>
        </div>
    `;

    // Select the .details div within the current image wrapper
    const details = imgDiv.querySelector('.details');

    // Add event listener for mouseover (when the user hovers over the image)
    imgDiv.addEventListener("mouseover", () => {
        // fade in the details
        details.style.opacity = "1";
    });

    imgDiv.addEventListener("mouseout", () => {
        // Hide the details by setting its opacity to 0
        // fade out the details
        details.style.opacity = "0";
    });

    eventsGrid.appendChild(imgDiv);
});
