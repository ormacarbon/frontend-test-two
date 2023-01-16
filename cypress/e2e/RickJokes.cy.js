describe("RickJokes", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    const userData = {
      login: "testinguser",
      password: "12345",
    };
    localStorage.setItem("userData", JSON.stringify(userData));
    cy.get("button:contains('Login')").click();
    cy.get("button:contains('Return')").click();
    cy.get("button:contains('Login')").click();
    cy.get('input[placeholder="Login"]').type("testinguser");
    cy.get('input[placeholder="Password"]').type("12345");
    cy.get("button:contains('Enter')").click();
  });

  it("should be able to navigate to rickjokes route and read some jokes", () => {
    cy.get("button:contains('Rick tells jokes')").should("be.visible").click();
    cy.get("[data-testid=joke-text-box]");
    cy.get("[data-testid=rick-reactions]").should("be.visible");
    cy.get("[data-testid=joke-action-btn]")
      .should("be.visible")
      .should("contain", "Yeah, tell me a joke!")
      .click();
    cy.wait(3000);
    cy.get("[data-testid=joke-action-btn]").then(($jokeGenerator) => {
      if ($jokeGenerator.text().includes("What's the punchline?")) {
        $jokeGenerator.click();
        cy.wait(5000)
        cy.get("[data-testid=leave-rickjokes]")
          .should("be.visible")
          .should("have.text", "Return to dashlist")
          .click();
        cy.wait(3000);
        cy.get("[data-testid=leave-rickjokes]")
          .should("be.visible")
          .should("have.text", "Yes, take me to dashlist!")
          .click();
      } else {
        cy.wait(5000)
        cy.get("[data-testid=leave-rickjokes]")
          .should("be.visible")
          .should("have.text", "Return to dashlist")
          .click();
        cy.wait(3000);
        cy.get("[data-testid=leave-rickjokes]")
          .should("be.visible")
          .should("have.text", "Yes, take me to dashlist!")
          .click();
      }
    });
  });
});
