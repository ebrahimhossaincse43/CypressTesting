

describe('Cypress Basic', () => {
    it('Title Verify', () => {
        //Visit website
      cy.visit('https://codenboxautomationlab.com/practice/')
        //Title Verify
      cy.title().should('eq', 'Automation Practice – CodenBox AutomationLab')
    })

    it('Check Box Checked and Unchecked', function (){
      //Single check
      cy.xpath("//input[@id='checkBoxOption1']").check().should('be.enabled').and('have.value', 'option1')
      cy.xpath("//input[@id='checkBoxOption2']").check().should('be.enabled').and('have.value', 'option2')
      cy.xpath("//input[@id='checkBoxOption3']").check().should('be.enabled').and('have.value', 'option3')

      //wait
      cy.wait(2000)
      
      //Single uncheck
      cy.xpath("//input[@id='checkBoxOption1']").uncheck()
      cy.xpath("//input[@id='checkBoxOption2']").uncheck()
      cy.xpath("//input[@id='checkBoxOption3']").uncheck()

      //wait
      cy.wait(2000)

      //Multiple check and unchecked
      cy.get('input[type=checkbox]').check(['option1','option2'])

      //wait
      cy.wait(2000)

      //Multiple unchecked
      cy.get('input[type=checkbox').uncheck(['option1', 'option2'])
    })
})