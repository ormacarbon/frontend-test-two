describe("MainManuNavigation.cy", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    const userData = {
      login: "testinguser",
      password: "12345",
    };
    localStorage.setItem("userData", JSON.stringify(userData));
  });

  it("should be able to navigate through the lists", () => {
    cy.get("button:contains('Login')").click();
    cy.get("button:contains('Return')").click();
    cy.get("button:contains('Login')").click();
    cy.get('input[placeholder="Login"]').type("testinguser");
    cy.get('input[placeholder="Password"]').type("12345");
    cy.get("button:contains('Enter')").click();
    cy.get("button:contains('Locations List')").should("be.visible").click();
    cy.wait(2000);
    cy.get("button:contains('Episodes List')").should("be.visible").click();
    cy.wait(2000);
    cy.get("button:contains('Characters List')").should("be.visible").click();
    cy.wait(2000);
    cy.get("button:contains('Rick tells jokes')").should("be.visible").click();
    cy.wait(2000);
    cy.get("button:contains('Return to dashlist')").click();
    cy.wait(2000);
    cy.get("button:contains('Yes, take me to dashlist')").should("be.visible").click();
    cy.wait(2000);
    cy.get("button:contains('Log out')").should("be.visible").click();
    cy.wait(2000);
    cy.get("button:contains('Cancel')").should("be.visible").click();
    cy.wait(2000);
    cy.get("button:contains('Log out')").should("be.visible").click();
    cy.wait(2000);
    cy.get("button:contains('Confirm')").should("be.visible").click();
  });
});
