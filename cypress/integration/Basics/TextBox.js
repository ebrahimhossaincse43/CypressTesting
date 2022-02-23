describe('My First Test', () => {
    it('Title Verify', () => {
        //Visit website
      cy.visit('https://demoqa.com/text-box')
        //Title Verify
      cy.title().should('eq', 'ToolsQA')
    })

    it('TextBox Test', () => {      
    cy.xpath("//input[@id='userName']").should('be.visible').should('be.enabled').type("Md. Ebrahim Hossain")
    cy.xpath("//input[@id='userEmail']").should('be.visible').should('be.enabled').type("ebrahimhossaincse43@gmail.com")
    cy.xpath("//textarea[@id='currentAddress']").should('be.visible').should('be.enabled').type("House-S-01, Road-33, Block-J")
    cy.xpath("//textarea[@id='permanentAddress']").should('be.visible').should('be.enabled').type("Dhaka, Bangladesh")
    cy.xpath("//button[@id='submit']").should('be.visible').should('be.enabled').click()
    cy.wait(2000)   
    })
  })