describe("ListsPage", () => {
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

  it("should be able to navigate to a list, use pagination and search filter", () => {
    cy.get("[data-testid=characters-page-title]").should(
      "have.text",
      "Search for your favourite character!"
    );
    cy.get("[data-testid=character-search-input]")
      .should("exist")
      .type("rick sanchez");
    cy.get("button:contains('Search')").click();
    cy.get("[data-testid=table-characters-name]").should("contain", "Rick");
    cy.wait(2000);
    cy.get("button:contains('Clear filters')").click();
    cy.get("button:contains('Prev')").should("have.prop", "disabled", true);
    cy.get("button:contains('Next')").click();
    cy.wait(2000);
    cy.get("button:contains('Prev')")
      .should("have.prop", "disabled", false)
      .click();
    cy.wait(2000);

    cy.get("button:contains('Locations List')").should("be.visible").click();
    cy.get("[data-testid=locations-page-title]").should(
      "have.text",
      "Search for an iconic location!"
    );
    cy.get("[data-testid=location-search-input]").should("exist").type("earth");
    cy.get("button:contains('Search')").click();
    cy.get("[data-testid=table-locations-name]").should("contain", "Earth");
    cy.wait(2000);
    cy.get("button:contains('Clear filters')").click();
    cy.get("button:contains('Prev')").should("have.prop", "disabled", true);
    cy.get("button:contains('Next')").click();
    cy.wait(2000);
    cy.get("button:contains('Prev')")
      .should("have.prop", "disabled", false)
      .click();

    cy.get("button:contains('Episodes List')").should("be.visible").click();
    cy.get("[data-testid=episodes-page-title]").should(
      "have.text",
      "Search for your favourite episode!"
    );
    cy.get("[data-testid=episode-search-input]").should("exist").type("pilot");
    cy.get("button:contains('Search')").click();
    cy.get("[data-testid=table-episodes-name]").should("contain", "Pilot");
    cy.wait(2000);
    cy.get("button:contains('Clear filters')").click();
    cy.get("button:contains('Prev')").should("have.prop", "disabled", true);
    cy.get("button:contains('Next')").click();
    cy.wait(2000);
    cy.get("button:contains('Prev')")
      .should("have.prop", "disabled", false)
      .click();
  });
});
