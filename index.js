const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;
const superheroes = [];

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.json());

app.get("/superheroes", (req, res) => {
    if (superheroes.length === 0) {
        return res.status(200).json({ message: "No superheroes found." });
    }
    const sortedSuperheroes = superheroes.sort((a,b) =>b.humilityScore - a.humilityScore)
    res.json(sortedSuperheroes);
});

app.post("/superheroes", (req, res) => {
    const { name, superpower, humilityScore } = req.body;

    if (!name || !superpower || humilityScore === undefined) {
        return res.status(400).json({ error: "All fields (name, superpower, humilityScore) are required." });
    }

    const score = Number(humilityScore);

    if(isNaN(score) || score < 1 || score > 10) {
        return res.status(400).json({ error: "Humility Score must be a number between 1 and 10"})
    }

    const addSuperhero = { name, superpower, humilityScore: score };

    superheroes.push(addSuperhero);
    res.status(201).json(addSuperhero)
});


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})

module.exports = app;