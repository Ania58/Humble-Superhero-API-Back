const request = require("supertest");
const app = require("./index");

describe("Superhero API", () => {
    it("should add a new superhero and return 201", async () => {
      const response = await request(app)
        .post("/superheroes")
        .send({
          name: "Captain Humble",
          superpower: "Flying",
          humilityScore: 8
        });
  
      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty("name", "Captain Humble");
      expect(response.body).toHaveProperty("superpower", "Flying");
      expect(response.body).toHaveProperty("humilityScore", 8);
    });

    it("should fetch all the superheroes and return 200", async () => {
      const response = await request(app).get("/superheroes");
      
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true); 
      expect(response.body.length).toBeGreaterThan(0);

      expect(response.body[0]).toHaveProperty("name", "Captain Humble");
      expect(response.body[0]).toHaveProperty("superpower", "Flying");
      expect(response.body[0]).toHaveProperty("humilityScore", 8);
    });

    it("should return superheroes sorted by humilityScore in descending order", async () => {
      await request(app).post("/superheroes").send({ name: "Iron HumbleMan", superpower: "Mindreading", humilityScore: 5 });
      await request(app).post("/superheroes").send({ name: "Black HumbleWidow", superpower: "Super strength", humilityScore: 10 });
      await request(app).post("/superheroes").send({ name: "Humble Panther", superpower: "Invisibility", humilityScore: 7 });

      const response = await request(app).get("/superheroes");
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(2); 

      const scores = response.body.map(hero => hero.humilityScore);
      const sortedScores = [...scores].sort((a, b) => b - a); 

      expect(scores).toEqual(sortedScores); 
  });

    it("should return 400 if a required field is missing", async () => {
      const response = await request(app)
          .post("/superheroes")
          .send({
              superpower: "Invisibility",
              humilityScore: 5
          });

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty("error", "All fields (name, superpower, humilityScore) are required.");
  });

  it("should return 400 if humility score is not a number", async () => {
      const response = await request(app)
          .post("/superheroes")
          .send({
              name: "Captain Humble",
              superpower: "Flying",
              humilityScore: "NotANumber"
          });

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty("error", "Humility Score must be a number between 1 and 10");
  });

  it("should return 400 if humility score is out of range", async () => {
      const response = await request(app)
          .post("/superheroes")
          .send({
              name: "Captain Humble",
              superpower: "Flying",
              humilityScore: 15
          });

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty("error", "Humility Score must be a number between 1 and 10");
  });
  });

  