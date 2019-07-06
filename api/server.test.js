const requre = require("supertest");
const server = require("./server");

describe("server", () => {
  describe("GET /", () => {
    it("responds with 200", () => {
      return supertest(server)
        .get("/")
        .expect(200);
    });
  });
});
