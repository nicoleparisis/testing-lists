describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");
    cy.wait(1000);

    //add item to the todo list & verify it is added

    //mark list item complete

    // remove todo item from list & verify deletion

    //add another item to the list & refresh page

    // verify list order is the same state

    //extra credit* reorder the list
  });
});
