//  Danial Takdehghan 
// Student ID: 8742203
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;
const DATA_FILE = 'cars.json';

app.use(bodyParser.json());


const readData = () => {
    const data = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(data);
}

const writeData = (data) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
}


//CRUD Endpoints

//new car creation
app.post('/cars', (req, res) => {
    const cars = readData();
    const newCar = req.body;
    newCar.id = cars.length ? cars[cars.length - 1].id + 1 : 1;
    cars.push(newCar);
    writeData(cars);
    res.status(201).json(newCar);
});

//Get All Cars
app.get('/cars', (req, res) => {
    const cars = readData();
    res.json(cars);
});

//Read a single car by ID
app.get('/cars/:id', (req, res) => {
    const cars = readData();
    const car = cars.find(c => c.id === parseInt(req.params.id));
    if (!car) {
        return res.status(400).json({ message: 'Car Not Found' });
    } else {
        res.json(car);
    }
});

//Update a car by ID
app.put('/cars/:id', (req, res) => {
    const cars = readData();
    const index = cars.findIndex(c => c.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({ message: 'Car Not Found' });
    }

    cars[index] = { ...cars[index], ...req.body }; //Update the car
    writeData(cars);
    res.json(cars[index]);
});

//Remove a Car by ID
app.delete('/cars/:id', (req, res) => {
    const cars = readData();
    const filteredCars = cars.filter(c => c.id !== parseInt(req.params.id));
    if (cars.length === filteredCars.length) {
        return res.status(404).json({ message: 'Car not found' })
    }
    writeData(filteredCars);
    res.status(204).send();
});

//Launch the server 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);

});
