const requre = require("supertest");
const server = require("./server");

describe("server", () => {
  describe("GET /", () => {
    it("responds with 200", () => {
      return supertest(server)
        .get("/games")
        .expect(200);
    });

    it("returns an array", async () => {
      await supertest(server)
        .get("/games")
        .expect(Array.isArray(res.body))
        .toBe(true);
    });

    it("returns empty array if 0 games", async () => {
      await supertest(server)
        .get("/games")
        .expect(res.body)
        .toEqual([]);
    });

    it('responds with { api: "up"}', async () => {
      await supertest(server)
        .get("/games")
        .then(res => {
          expect(res.body).toEqual({ api: "up" });
        });
    });
  });

  describe("POST /", () => {
    it("responds with 200", async () => {
      await supertest(server)
        .post("/games")
        .send({
          title: "Pacman",
          genre: "Arcade",
          releaseYear: 1980
        });
      expect(res.status).toBe(200);
    });

    it("requires a title", async () => {
      await supertest(server)
        .post("/games")
        .send({
          title: "",
          genre: "Arcade",
          releaseYear: 1980
        });
      expect(res.status).toBe(422);
    });

    it("requires a genre", async () => {
      await supertest(server)
        .post("/games")
        .send({
          title: "Pacman",
          genre: "",
          releaseYear: 1980
        });
      expect(res.status).toBe(422);
    });
  });
});
