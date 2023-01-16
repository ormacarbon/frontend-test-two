describe("Login", () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should change colors on darkmode switch button", () => {
    cy.wait(2000);
    cy.get("[data-testid=darkmode-switch]").click();
    cy.get("[data-testid=darkmode-text]").should("have.text", "Dark mode: off");
    cy.get("[data-testid=darkmode-wrapper]").should(
      "have.css",
      "background-color",
      "rgb(236, 232, 221)"
    );

    cy.wait(2000);
    cy.get("[data-testid=darkmode-switch]").click();
    cy.get("[data-testid=darkmode-text]").should("have.text", "Dark mode: on");
    cy.get("[data-testid=darkmode-wrapper]").should(
      "have.css",
      "background-color",
      "rgb(57, 62, 70)"
    );
  });

  it("should be able to register a user and log on the application", () => {
    cy.get("button:contains('Register')").click();
    cy.wait(2000);
    cy.get("button:contains('Return')").click();
    cy.wait(2000);
    cy.get("button:contains('Register')").click();
    cy.get('input[placeholder="Login"]').type("testinguser");
    cy.get('input[placeholder="Password"]').type("12345");
    cy.get('input[placeholder="Repeat password"]').type("12345");
    cy.get("button:contains('Register')").click();
    cy.contains("User successfully registered!").should("be.visible");

    cy.get("button:contains('Login')").click();
    cy.wait(2000);
    cy.get("button:contains('Return')").click();
    cy.wait(2000);
    cy.get("button:contains('Login')").click();
    cy.get('input[placeholder="Login"]').type("testinguser");
    cy.get('input[placeholder="Password"]').type("12345");
    cy.get("button:contains('Enter')").click();
    cy.contains("User logged in!").should("be.visible");
  });
});
