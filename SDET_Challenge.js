/// < referece types ="Cypress" />

import { search } from "./POM/POM2";

describe("SDET_Coding Exercise", function () {
  beforeEach(() => {
    // run these tests as if in a desktop
    // browser with a 720p monitor
    cy.viewport(1280, 720);
  });

  it("URL validation", function () {
    cy.visit("https://www.epicgames.com/store/en-US/")
      .title()
      .should("eq", "Epic Games Store | Official Site");
    // testing accecibility for the website
  });
  //Testing Search box using input entry 'a'
  it("Enter single alphabet(a)", function () {
    search("A", "A");
  });

  //Testing search box using first three letters to get accuarate results
  it("Enter letters(bat)", function () {
    search("Bat", "Bat");
  });

  //Testing search box against being case sesitive
  it("Enter letters(creed)", function () {
    search("creed", "creed");
  });

  //Testig 'see more' blockin under search box options
  it("See More", function () {
    cy.wait(5000);
    cy.get("#result-see-more > .Autocomplete-resultText_e9dad9de")
      .click()
      .title()
      .should("eq", "Epic Games Store | Official Site");
  });

  //Testing Filters (Check first result)
  it('Apply action filter',() =>{
    cy.visit('https://www.epicgames.com/store/en-US/browse?sortBy=releaseDate&sortDir=DESC&pageSize=30')
    cy.get('[data-testid=filter-button-wrapper-ACTION] > .Button-main_d4ab9eb9 > :nth-child(1)').click()
    cy.wait(5000)
    cy.get('#dieselReactWrapper > div > div.AppPage-bodyContainer_2c8794fe > main > div > div > div > div > div > div > div.Browse-content_09c947d6.undefined.SectionWrapper-vertical_c5c45a04 > div > section > div.BrowseGrid-groupWrapper_927ab7f8 > div > div:nth-child(1)').contains('Ubisoft')
  });
});
