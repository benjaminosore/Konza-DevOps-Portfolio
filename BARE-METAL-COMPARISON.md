Bare Metal Comparison

Introduction

Week 2 of the Konza Technopolis Development Authority attachment focused on rebuilding the portfolio using a bare-metal approach. The objective was to understand what happens behind the abstractions provided by application frameworks and to implement the core functionality using vanilla HTML, CSS, JavaScript and PHP.

The Week 1 portfolio scaffold did not use a specific application framework such as Angular, React, or Django. Therefore, this comparison focuses on the responsibilities that frameworks commonly simplify and how those responsibilities were implemented manually during the Week 2 bare-metal implementation.

What Frameworks Normally Handle

Modern web frameworks commonly provide abstractions for areas such as:

Application routing
Handling API requests
Processing form submissions
Connecting frontend interfaces to backend services
Managing application data
Rendering dynamic content
Organizing application code
Running development servers

The Week 2 implementation provided an opportunity to handle these responsibilities directly.

Bare-Metal Implementation

 1. Routing

Instead of relying on a framework router, the portfolio uses a custom PHP router in:

api/routes/router.php

The router checks the requested URL and HTTP method and directs the request to the appropriate functionality.

Examples include:

GET /api/hello
 GET /api/projects
 POST /api/contact

This helped me understand how HTTP requests are received and routed at a lower level.

2. API Endpoints

The backend API was implemented directly with PHP.

The main endpoints are:

/api/hello — returns a test JSON response.
 /api/projects — returns portfolio project information.
/api/contact — receives contact form submissions.

No backend framework was used to create these endpoints.

3. Data Handling

Project information is stored in a PHP data file:

api/data/projects.php

Contact submissions are handled using PHP and stored locally in:

api/data/contacts.json

This provided practical experience with reading, modifying and writing application data without using a framework or database abstraction layer.

4. Frontend and Backend Communication

The frontend communicates with the PHP API using JavaScript's built-in `fetch()` function.

For example, the portfolio requests project data from:

/api/projects

The contact form sends submitted information to:

/api/contact

This demonstrated how a frontend application can communicate directly with a backend API.

5. Form Processing

The contact form is processed by:

api/controllers/contactController.php

The controller:

1. Receives the request.
2. Reads the JSON request body.
3. Extracts the submitted name, email and message.
4. Checks that the required fields are present.
5. Stores the submission.
6. Returns a JSON response to the frontend.

This functionality was implemented manually instead of using a framework's form-handling features.

 6. Dynamic Project Rendering

The projects are not hard-coded directly into the HTML.

JavaScript requests the project data from the PHP API and dynamically creates the project cards in the browser.

This helped me understand the relationship between API data and frontend DOM manipulation.

7. Development Server

The application was tested using PHP's built-in development server:

php -S localhost:8000

The portfolio could then be accessed through:

http://localhost:8000/

This provided a real local web-server environment instead of simply opening the HTML file directly in the browser.

What I Learned

The bare-metal approach helped me understand what happens underneath higher-level frameworks.

I learned that many framework features are built around fundamental web concepts such as:

HTTP requests and responses
URL routing
HTTP methods such as GET and POST
JSON data
API endpoints
File and data handling
DOM manipulation
Client-server communication

Working without a framework required more manual code, but it gave me a clearer understanding of how the different parts of a web application communicate.

Conclusion

The Week 2 bare-metal implementation provided practical experience in building web application functionality without relying on an application framework.

Instead of depending on framework abstractions, I implemented routing, API endpoints, data handling, form processing, frontend API communication and dynamic rendering directly using vanilla technologies.

This experience strengthened my understanding of the underlying concepts that frameworks are designed to simplify.
