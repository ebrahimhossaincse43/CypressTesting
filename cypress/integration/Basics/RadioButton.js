

describe('My First Test', () => {
    it('Title Verify', () => {
        //Visit website
      cy.visit('https://demoqa.com/radio-button')
        //Title Verify
      cy.title().should('eq', 'ToolsQA')
    })

    it('Radio Button', () => {      
    cy.xpath("//label[contains(text(),'Yes')]").should('be.visible').should('not.be.enabled').click()
    cy.xpath("//label[contains(text(),'Impressive')]").should('be.visible').should('not.be.enabled').click()
    cy.xpath("//label[contains(text(),'No')]").should('be.visible').should('not.be.enabled')
    cy.wait(2000)   
    })
  })