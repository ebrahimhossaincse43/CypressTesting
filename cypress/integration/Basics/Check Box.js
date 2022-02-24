/// <reference types='Cypress' />

describe('Cypress Basic', () => {
    it('Title Verify', () => {
        //Visit website
      cy.visit('https://codenboxautomationlab.com/practice/')
        //Title Verify
      cy.title().should('eq', 'Automation Practice – CodenBox AutomationLab')
    })

    it('Check Box Checked and Unchecked', function (){

      //Xpath
      let option1_xpath = "//input[@id='checkBoxOption1']"
      let option2_xpath = "//input[@id='checkBoxOption2']"
      let option3_xpath = "//input[@id='checkBoxOption3']"

      //Value
      let option1_value = "option1"
      let option2_value = "option2"
      let option3_value = "option3"

      //Single check
      cy.xpath(option1_xpath).check().should('be.enabled').and('have.value', option1_value)
      cy.xpath(option2_xpath).check().should('be.enabled').and('have.value', option2_value)
      cy.xpath(option3_xpath).check().should('be.enabled').and('have.value', option3_value)

      //wait
      cy.wait(2000)
      
      //Single uncheck
      cy.xpath(option1_xpath).uncheck()
      cy.xpath(option2_xpath).uncheck()
      cy.xpath(option3_xpath).uncheck()

      //wait
      cy.wait(2000)

      //Multiple check and unchecked
      cy.get('input[type=checkbox]').check([option1_value, option2_value])

      //wait
      cy.wait(2000)

      //Multiple unchecked
      cy.get('input[type=checkbox').uncheck([option1_value, option2_value])
      
      //Function Calling
      checkBoxSelect(option1_xpath, 'check', option1_value)
    })
})

//Custom Checkbox Select Function
function checkBoxSelect(xpath, options, value){
  if(options.localeCompare("check")){
  cy.xpath(xpath).check().should('be.enabled').and('have.value', value)
  }
}