/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

it('Links test',function(){
cy.visit('https://demoqa.com/elements')
cy.get(':nth-child(1) > .element-list > .menu-list > #item-5 > .text').click();
cy.get('#created').click();
cy.get('#linkResponse').should('have.text', 'Link has responded with staus 201 and status text Created');
})

it('fileupload test',function(){
   // cy.visit('https://demoqa.com/elements');
    cy.visit('https://demoqa.com/upload-download');
    
    const attachfile='Test.txt';
    cy.get('#uploadFile').attachFile(attachfile);

  })
  it('filedpwnload test',function(){
    // cy.visit('https://demoqa.com/elements');
     cy.visit('https://demoqa.com/upload-download');
     cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg');
    
 
   })
   it('Drag and drop test',function(){
    cy.visit('https://demoqa.com/droppable');
   
    const dataTransfer = new DataTransfer();

    cy.get('#draggable').trigger('dragstart', {
      dataTransfer
    });

    cy.get('#droppable').trigger('drop', {
      dataTransfer
    });
   })
it.only('Slide Test',function(){
  cy.visit('https://demoqa.com/elements');
  cy.contains('Elements').click();
  cy.contains('Widgets').click();
  cy.contains('Slide').click();
  cy.get('.range-slider')
      .invoke("val",50)
      .trigger("change")

})