/// <reference types='Cypress' />

describe('Cypress Basic', () => {
    beforeEach(() => {
        //Visit website
      cy.visit('https://qavbox.github.io/demo/signup/')
    })

    //Single Value Select
    it('Drop Down handling part-01 ', function (){
        cy.get('[name=\'sgender\']').select('male').invoke('val').then((value)=>{
            cy.log('Selected Value = '+ value)
        })
        cy.wait(2000)
        cy.get('[name=\'sgender\']').select('female').find('option:selected').should('have.text', 'Female')
        cy.wait(2000)
        cy.get('[name=\'sgender\']').select('na')
        cy.wait(2000)
        
    })   

    //Multiple Value Select
    it('Drop Down handling part-02', function (){
        cy.get('#tools').select(['selenium', 'postman', 'cypress']).find('option:selected').each(($e1)=>{
            cy.wrap($e1).invoke('val').then((value)=>{
                cy.log('Selected Value = '+ value)
            }) 
        })
        cy.get('#tools').select(['selenium', 'postman', 'cypress']).invoke('val').should('deep.equal', ['selenium', 'postman', 'cypress'])
        cy.wait(2000)
        
    }) 
})