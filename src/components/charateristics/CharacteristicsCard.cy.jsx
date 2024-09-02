import CharacteristicsCard from "./CharacteristicsCard";

describe("<CharacteristicsCard />", () => {
  it("renders", () => {
    cy.mount(<CharacteristicsCard />);
    cy.get("[data-cy=title]").should("have.text", "Characteristics");
    cy.get("[data-cy=weigthfield]").should("have.text", "Weight : -1");
    cy.get("[data-cy=heightfield]").should("have.text", "Height : -1");
    cy.get("[data-cy=baseXpfield]").should("not.have.text", "Weight : -1");
  });
});
