const menuButton = document.getElementById("menu-button");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

menuButton.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});

navItems.forEach(function(item) {
    item.addEventListener("click", function() {
        navLinks.classList.remove("active");
    });
});

const darkModeButton = document.getElementById("dark-mode-button");

darkModeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        darkModeButton.textContent = "☀️";
    } else {
        localStorage.setItem("darkMode", "disabled");
        darkModeButton.textContent = "🌙";
    }
});

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    try {
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            })
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.error || "Failed to send message");
        }

        alert(result.message);
        contactForm.reset();

    } catch (error) {
        console.error("Contact form error:", error);
        alert("Sorry, your message could not be sent.");
    }
});

const scrollTopButton = document.getElementById("scroll-top-button");

window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }
});

scrollTopButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    darkModeButton.textContent = "☀️";
}

// Load projects from PHP API
async function loadProjects() {
    const projectsContainer = document.querySelector('.projects-container');

    try {
        const response = await fetch('/api/projects');

        if (!response.ok) {
            throw new Error('Failed to load projects');
        }

        const projects = await response.json();

        projectsContainer.innerHTML = '';

        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');

            projectCard.innerHTML = `
                <div class="project-image">
                    <img src="${project.image}" alt="${project.name}">
                </div>

                <div class="project-content">
                    <h3>${project.name}</h3>

                    <p>${project.description}</p>

                    <div class="project-technologies">
                        ${project.technologies
                            .map(technology => `<span>${technology}</span>`)
                            .join('')}
                    </div>

                    <a href="${project.link}" class="project-link">View Project</a>
                </div>
            `;

            projectsContainer.appendChild(projectCard);
        });

    } catch (error) {
        console.error('Error loading projects:', error);
    }
}

loadProjects();