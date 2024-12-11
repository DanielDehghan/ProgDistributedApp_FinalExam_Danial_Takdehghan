<!-- Danial Takdehghan -->
<!-- Student ID: 8742203 -->
# Final Exam API - Car Resource

## Description
This is a Node.js-based API that performs CRUD operations for a Car resource. The data is stored in a JSON file (`cars.json`) instead of a database.

## Features
- Add a new car (Create).
- Retrieve all cars or a specific car by ID (Read).
- Update car details by ID (Update).
- Delete a car by ID (Delete).

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>

2. Navigate to the project directory:
 cd <project-directory>

3. Install dependencies:
   npm install

4. Start the server:
   node index.js

# Endpoints

1. Create a Car

    POST /cars
    Example Request Body:

    { "make": "Ford", "model": "Fusion", "year": 2019 }

2. Get All Cars

    GET /cars

3. Get a Car by ID

    GET /cars/:id
    Example:
        URL: http://localhost:3000/cars/1

4. Update a Car

    PUT /cars/:id
    Example Request Body:

    { "model": "Corolla" }

5. Delete a Car

    DELETE /cars/:id
    Example:
        URL: http://localhost:3000/cars/1

# Example Data

Here’s the sample data in cars.json:

[
  {
    "id": 1,
    "make": "Toyota",
    "model": "Corolla",
    "year": 2020
  },
  {
    "id": 2,
    "make": "Honda",
    "model": "Civic",
    "year": 2021
  }
]

# Notes

    Ensure cars.json exists in the root directory and contains valid JSON data.
    The server runs locally on http://localhost:3000.

# Author
Danial Takdehghan