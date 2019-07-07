const supertest = require("supertest");
const server = require("./server");

describe("server", () => {
  describe("GET /", () => {
    it("responds with 200", () => {
      supertest(server)
        .get("/api/games")
        .expect(200);
    });

    it("returns an array", async () => {
      const res = await supertest(server).get("/api/games");
      expect(Array.isArray(res.body)).toBe(true);
    });

    it("returns empty array if 0 games", async () => {
      const res = await supertest(server).get("/api/games");
      expect(res.body).toEqual([]);
    });
  });

  describe("POST /", () => {
    it("responds with 200", async () => {
      const res = await supertest(server)
        .post("/api/games")
        .send({
          title: "Pacman",
          genre: "Arcade",
          releaseYear: 1980
        });
      expect(res.status).toBe(200);
    });

    it("requires a title", async () => {
      const res = await supertest(server)
        .post("/api/games")
        .send({
          title: "",
          genre: "Arcade",
          releaseYear: 1980
        });
      expect(res.status).toBe(422);
    });

    it("requires a genre", async () => {
      const res = await supertest(server)
        .post("/api/games")
        .send({
          title: "Pacman",
          genre: "",
          releaseYear: 1980
        });
      expect(res.status).toBe(422);
    });
  });
});
