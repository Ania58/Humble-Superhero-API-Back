# Humble-Superhero-API-Back

### Overview

This is a simple Express backend that provides a REST API for managing superheroes. It allows users to:

* Add a superhero (name, superpower, humility score)

* Retrieve a list of superheroes, sorted by humility score

#### Built with:

* Node.js + Express

* In-memory storage (no database required)

* Basic validation

### Getting Started

#### Installation

Clone the repository and install dependencies:

``` bash

npm install

```

#### Running the Server

Start the backend server:

```bash

npm start

```

The server will be available at http://localhost:3000.

### API Endpoints

#### POST /superheroes

* Adds a new superhero.

#### GET /superheroes

* Retrieves all superheroes, sorted by humility score in descending order.

#### Testing

This project includes tests using Jest and SuperTest to verify API functionality.

#### Running Tests

Run the following command to execute the tests:

``` bash

npm test

```

### Future Improvements

* Move to a proper database (MongoDB/PostgreSQL)

* Improve error handling

* Add authentication (optional)



## Teamwork & Collaboration

If I were to develop this project as part of a team, I would ideally work in a small group of three, dividing responsibilities based on strengths and familiarity with the tasks. One team member could focus on building the REST API and handling the database, another could work on testing and potentially authentication if the project were extended, and the third could manage the frontend, implementing React functionalities with UX/UI improvements and refined CSS styling.

To ensure smooth collaboration, I would follow best practices with GitHub pull requests, clear commit messages, and periodic team meetings to discuss progress, challenges, and potential improvements. Regular code reviews and constructive feedback would help maintain quality and consistency across the project.


## If I Had More Time...
Given additional time, I would focus on several key improvements:

* Database Integration: Implement persistent storage using MongoDB (NoSQL) or PostgreSQL (SQL) to ensure data is not lost when the server restarts.
* Enhanced Styling: Improve the CSS design beyond the current minimal implementation to enhance the user experience while maintaining a humble and clean aesthetic.
* Robust Error Handling: Improve error handling to provide clearer responses, making debugging easier for developers and ensuring a smoother UX for users.
* Code Structuring: Refactor the backend to follow a more modular architecture, separating concerns into controllers and routes to keep index.js clean and focused solely on initializing and running the application.
* Additional Endpoints: Expand beyond just GET and POST by implementing update (PUT/PATCH) and delete (DELETE) functionalities, allowing for a fully functional CRUD API.

