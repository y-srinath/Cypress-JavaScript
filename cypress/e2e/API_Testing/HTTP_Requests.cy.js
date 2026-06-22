describe("HTTP Requests", () => {
  it("GET Request", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1").then(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("id", 1);
      },
    );
  });

  it("POST Request", () => {
    cy.request("POST", "https://jsonplaceholder.typicode.com/posts", {
      title: "foo",
      body: "bar",
      userId: 1,
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("id");
    });
  });

  it("PUT Request", () => {
    cy.request("PUT", "https://jsonplaceholder.typicode.com/posts/1", {
      id: 1,
      title: "foo",
      body: "bar",
      userId: 1,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("title", "foo");
    });
  });

  it("DELETE Request", () => {
    cy.request("DELETE", "https://jsonplaceholder.typicode.com/posts/1").then(
      (response) => {
        expect(response.status).to.eq(200);
      },
    );
  });
});
