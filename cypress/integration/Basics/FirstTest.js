describe('My First Test', () => {
    it('Title Verify', () => {
        //Visit website
      cy.visit('https://demo.nopcommerce.com/')
        //Title Verify
      cy.title().should('eq', 'nopCommerce demo store')
    })

    it('Login Verify', () => {
      
    cy.xpath("//a[contains(text(),'Log in')]").click()
    })
  })
