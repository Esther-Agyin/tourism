/* =========================
   EXPERIENCES PAGE LOGIC
========================= */

const experienceContainer = document.getElementById("experienceContainer");

if (experienceContainer) {

    const experiences = [
        {
            title: "Mountain Hiking",
            category: "adventure",
            image: "images/hiking.jpg",
            description: "Enjoy thrilling hikes across scenic mountain trails."
        },
        {
            title: "Cultural Village Tour",
            category: "adventure",
            image: "images/card2.jpg",
            description: "Experience local traditions, music, and food."
        },
        {
            title: "Wildlife Safari",
            category: "adventure",
            image: "images/card3.jpg",
            description: "Explore wildlife reserves and natural habitats."
        },
        {
            title: "Rock Climbing",
            category: "nature",
            image: "images/rock.jpg",
            description: "Exciting way to explore nature by scaling stunning rock formations and cliffs."
        },

          {
            title: "Surfing",
            category: "nature",
            image: "images/surfing.jpg",
            description: "Offers an exciting mix of adventure, skill, and relaxation while enjoying the sun, sea, and vibrant beach culture."
        },
          {
            title: "Desert",
            category: "nature",
            image: "images/desert.jpg",
            description: "Enjoy activities such as dune bashing, camel riding, and stargazing while discovering the beauty, tranquility, and traditions of desert environments."
        },
        {
            title: "ATV",
            category: "culture",
            image: "images/atv.jpg",
            description: "Exciting adventure activity that allows tourists to explore rugged terrains and scenic landscapes on all-terrain vehicles"
        },
        {
            title: "Scuba Diving",
            category: "culture",
            image: "images/suba.jpg",
            description: "An unforgettable underwater adventure, exploring vibrant coral reefs and marine life beneath the sea."
        },
        {
            title: "Paragliding",
            category: "culture",
            image: "images/para.jpg",
            description: "An exhilarating aerial activity that lets tourists soar above scenic landscapes and coastlines."
        }
       
    ];

    const modal = document.getElementById("experienceModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const closeModal = modal.querySelector(".close");

    function renderExperiences(list) {
        experienceContainer.innerHTML = "";
        list.forEach(exp => {
            experienceContainer.innerHTML += `
                <div class="experience-card">
                    <img src="${exp.image}">
                    <div class="content">
                        <h3>${exp.title}</h3>
                        <p>${exp.description}</p>
                        <button>View Details</button>
                    </div>
                </div>
            `;
        });

        document.querySelectorAll(".experience-card button").forEach((btn, i) => {
            btn.addEventListener("click", () => {
                modalTitle.textContent = list[i].title;
                modalDescription.textContent = list[i].description;
                modal.style.display = "flex";
            });
        });
    }

    document.querySelectorAll(".filters button").forEach(btn => {
        btn.addEventListener("click", () => {
            const filter = btn.dataset.filter;
            if (filter === "all") {
                renderExperiences(experiences);
            } else {
                renderExperiences(experiences.filter(e => e.category === filter));
            }
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", e => {
        if (e.target === modal) modal.style.display = "none";
    });

    renderExperiences(experiences);
}
