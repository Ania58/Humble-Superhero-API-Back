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

