const supertest = require("supertest");
const should = require("should");

const server = supertest.agent("http://localhost:4000");

describe("SAMPLE unit test", () => {
  it("should return home page", (done) => {
    server
      .get("/")
      .expect("Content-type",/text/)
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
  });
});
