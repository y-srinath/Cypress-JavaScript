describe("API Testing - Query Parameters", () => {
  it("GET Request with Query Parameters", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users",
      qs: { page: 2 },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("page", 2);
      expect(response.body.data).to.be.an("array");
      expect(response.body.data.length).to.be.greaterThan(0);
      expect(response.body.data[0]).to.have.property("id", 7);
      expect(response.body.data[0]).to.have.property("first_name", "Michael");
    });
  });
});
