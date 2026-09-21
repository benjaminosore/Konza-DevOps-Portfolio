Week 2 Reflection

Overview

Week 2 focused on the "Bare Metal" implementation of my portfolio. The main goal was to understand how web applications work without depending on application frameworks and to implement core functionality using vanilla HTML, CSS, JavaScript and PHP.

What I Worked On

During Week 2, I extended the portfolio from a mainly frontend scaffold into a working application with a PHP backend.

I:

Created a PHP API structure using controllers, routes and data files.
Implemented a custom PHP router for handling API requests.
Created a `/api/hello` endpoint to test the backend.
Created a `/api/projects` endpoint to provide project information.
Connected the frontend projects section to the PHP API using JavaScript `fetch()`.
Created a contact form API using PHP.
Implemented JSON-based storage for contact form submissions.
Tested the contact form through the browser and confirmed that submitted data was being stored.
Configured and tested the application using PHP's built-in development server.
Used Git and GitHub throughout the implementation.

What I Learned

One of the biggest lessons from this week was understanding what happens behind higher-level frameworks.

By manually implementing routing, API endpoints and request handling, I gained a better understanding of how the frontend communicates with the backend.

I also learned how JavaScript can send HTTP requests to a PHP API and process JSON responses.

Working with PHP helped me understand backend concepts such as:

HTTP requests and responses
GET and POST methods
API routing
JSON data
Request body processing
File-based data storage
Backend controllers
Frontend and backend communication

Challenges

One of the challenges was configuring PHP correctly in my local development environment.

Initially, PHP was not available directly from Git Bash. I resolved this by configuring the PHP installation path so that the `php` command could be used from the terminal.

Another challenge was understanding how the frontend, PHP router, controllers and data files work together. Building each part manually helped me understand the flow of a request from the browser to the backend and back to the browser.

Key Takeaway

The bare-metal approach showed me that frameworks do not replace the underlying web technologies. Instead, they provide abstractions that make common development tasks easier and faster.

Implementing these features manually gave me a stronger understanding of what happens underneath those abstractions.

Conclusion

Week 2 improved my practical understanding of backend development and client-server communication.

I now have a better understanding of how routing, APIs, request handling, JSON data and frontend communication work together to form a functional web application.

This experience will give me a stronger foundation when working with backend frameworks and other development tools in the future.
