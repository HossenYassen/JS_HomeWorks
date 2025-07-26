const partners = [
  {
    name: "Google",
    logo: "https://cdn-icons-png.flaticon.com/512/300/300221.png",
    description: "Search engine and cloud services",
    link: "https://www.google.com"
  },
  {
    name: "Microsoft",
    logo: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
    description: "Software and enterprise solutions",
    link: "https://www.microsoft.com"
  },
  {
    name: "Amazon",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968870.png",
    description: "E-commerce and cloud computing",
    link: "https://www.amazon.com"
  },
  {
    name: "Meta",
    logo: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
    description: "Social media and virtual reality",
    link: "https://www.meta.com"
  },
  {
    name: "Apple",
    logo: "https://cdn-icons-png.flaticon.com/512/831/831276.png",
    description: "Consumer electronics and software",
    link: "https://www.apple.com"
  },
  {
    name: "Netflix",
    logo: "https://cdn-icons-png.flaticon.com/512/174/174883.png",
    description: "Streaming entertainment service",
    link: "https://www.netflix.com"
  },
  {
    name: "LinkedIn",
    logo: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    description: "Professional networking platform",
    link: "https://www.linkedin.com"
  },
  {
    name: "YouTube",
    logo: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
    description: "Video platform for content creators",
    link: "https://www.youtube.com"
  }
];

const partnersGrid = document.getElementById("grid");
partnersGrid.addEventListener("click", ()=>{
  console.log("Pressed!")
})

const fillPartnersGrid = function (data) {
  data.forEach((item, idx) => {
    const partner = document.createElement("div");
    partner.className = "partner-card";
    partner.innerHTML =
    `
    <button id="remove">X</button>
    <img src=${item.logo} alt="${item.name} logo">
    <h3>${item.name}</h3>
    <p>${item.description}</p>
    <a href=${item.link} target="_blank">Visit</a>
    `;
    partnersGrid.appendChild(partner);
  });
}

fillPartnersGrid(partners);

partnersGrid.addEventListener("click", (e)=>{
  const item = e.target.closest("div");
  item.classList.add("vanish");
});
