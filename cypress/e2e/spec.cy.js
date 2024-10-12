describe("App", () => {
  beforeEach(() => {
    localStorage.setItem("darkMode", "true");
    localStorage.setItem("language", "tr");
    cy.visit("/");
  });

  it("should show the lazy loading spinner", () => {
    cy.get('[data-cy="lazy-loading-container"]')
      .should("exist")
      .and("be.visible");
    cy.get('[data-cy="loading-spinner"]').should("be.visible");
  });

  it("should render the header after 2 seconds", () => {
    cy.get('[data-cy="header-container"]').should("be.visible");
  });

  it("should render the hero component", () => {
    cy.get('[data-cy="hero-container"]').should("be.visible");
  });

  it("should render the skills component", () => {
    cy.get('[data-cy="skills-container"]').should("be.visible");
  });

  it("should render the footer", () => {
    cy.get('[data-cy="footer-container"]').should("be.visible");
  });
});
