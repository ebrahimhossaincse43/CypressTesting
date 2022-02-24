

describe('My First Test', () => {
    it('Title Verify', () => {
        //Visit website
      cy.visit('https://demoqa.com/radio-button')
        //Title Verify
      cy.title().should('eq', 'ToolsQA')
    })

    it('Radio Button', () => {   
      let xpath_yes = "//label[contains(text(),'Yes')]"
      let xpath_impressive = "//label[contains(text(),'Impressive')]"
      let xpath_no = "//label[contains(text(),'No')]"

      selectRadioButton(xpath_yes, 'Yes' )
    })
    
  })

  //Radio Button Select using custom method
  function selectRadioButton(xpath, options){
    if(options.localeCompare('Yes')){
      cy.xpath(xpath).should('be.visible').should('not.be.enabled').click()
      cy.wait(2000)
    }
    else if(options.localeCompare('Impressive')){
      cy.xpath(xpath).should('be.visible').should('not.be.enabled').click()
      cy.wait(2000)
    }
    else if(options.localeCompare('No')){
      cy.xpath(xpath).should('be.visible').should('not.be.enabled')
      cy.wait(2000)
    }
  }