Benjamin Osore – Portfolio

A personal portfolio website built during my DevOps attachment at Konza Technopolis Development Authority (KoTDA).

The project started as a vanilla frontend portfolio and was progressively developed into a working portfolio with a lightweight PHP backend API, custom routing, dynamic project loading, and contact form processing.

Project Overview

This portfolio showcases my software development skills, projects, experience, and technical background.

The project was developed using a bare-metal approach, without relying on application frameworks for the Week 2 implementation. This provided practical experience in understanding and implementing responsibilities that frameworks commonly handle automatically.

Technologies Used

Frontend

HTML5
CSS3
JavaScript

Backend

PHP 8.2
JSON

Development Tools

Git
GitHub
Visual Studio Code
XAMPP
PHP Built-in Development Server

Features

Responsive portfolio layout
Mobile navigation menu
Dark mode
Smooth scroll-to-top functionality
About, Skills, Projects, Experience, and Contact sections
Dynamic project loading through a PHP API
Contact form connected to a PHP backend
JSON-based contact submission storage
Custom PHP routing
REST-style API endpoints
 Git/GitHub version control workflow

 API Endpoints

| Method | Endpoint        | Description                        |
| ------ | --------------- | ---------------------------------- |
| GET    | `/api/hello`    | Returns a test API response        |
| GET    | `/api/projects` | Returns portfolio project data     |
| POST   | `/api/contact`  | Processes contact form submissions |

Example

text
GET /api/hello


Response:

json
{
  "message": "Hello from Konza Portfolio API!"
}


 Project Structure

text
Konza-DevOps-Portfolio/
│
├── api/
│   ├── controllers/
│   │   ├── contactController.php
│   │   └── projectsController.php
│   │
│   ├── data/
│   │   ├── contacts.php
│   │   └── projects.php
│   │
│   ├── routes/
│   │   └── router.php
│   │
│   └── index.php
│
├── index.html
├── style.css
├── script.js
│
├── BARE-METAL-COMPARISON.md
├── DAY-2-VERSION-CONTROL.md
├── WEEK-1-REFLECTION.md
├── WEEK-2-REFLECTION.md
│
├── benjamin.jpg
├── StockMasterPro.png
└── portfolio-website.png


Running the Project Locally

1. Clone the repository
bash
git clone https://github.com/benjaminosore/Konza-DevOps-Portfolio.git


2. Navigate into the project

bash
cd Konza-DevOps-Portfolio


3. Start the PHP development server

bash
php -S localhost:8000


4. Open the portfolio

Visit:

text
http://localhost:8000


The API can also be tested using:

text
http://localhost:8000/api/hello


and:

text
http://localhost:8000/api/projects


Testing

The project was tested locally using the PHP built-in development server.

Testing included:

Loading the portfolio in the browser
Testing the `/api/hello` endpoint
Testing the `/api/projects` endpoint
Testing the contact form
Confirming contact submissions were stored locally
Testing frontend communication with the PHP API

Learning Outcomes

Through this project, I gained practical experience with:

Git branching and GitHub workflows
Pull requests and merging
Resolving Git merge conflicts
Building APIs with PHP
Creating custom routing
Handling HTTP GET and POST requests
Connecting JavaScript to backend APIs using `fetch()`
Processing form data
Working with JSON data
Running a local PHP development server
Understanding responsibilities commonly handled by web frameworks
Documenting software development work

Development Documentation

Additional documentation for the project includes:

DAY-2-VERSION-CONTROL.md – Git and version control notes
WEEK-1-REFLECTION.md – Week 1 reflection
BARE-METAL-COMPARISON.md– Comparison between framework responsibilities and the bare-metal implementation
WEEK-2-REFLECTION.md– Week 2 reflection

Author

Benjamin Osore

Software Developer | C# | Java | PHP | JavaScript | MySQL

GitHub: https://github.com/benjaminosore

Project Status

Active development

This portfolio is being developed and improved as part of my practical software development and DevOps experience.
