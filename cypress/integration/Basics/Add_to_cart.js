describe('My First Test', () => {
    it('Title Verify', () => {
        //Visit website
      cy.visit('https://demo.nopcommerce.com/')
        //Title Verify
      cy.title().should('eq', 'nopCommerce demo store')
    })

    it('Add to Cart', () => {
      
    cy.xpath("//input[@id='small-searchterms']").type("Apple MacBook Pro 13-inch")
    cy.xpath("//button[contains(text(), 'Search')]").click()
    cy.get('.product-title > a').click()
    cy.get('#add-to-cart-button-4').click()
    cy.wait(5000)
    cy.xpath("//span[contains(text(),'Shopping cart')]").click()
    cy.xpath("//span[@class='product-unit-price']").contains("$1,800.00")
    cy.xpath("//span[@class='product-subtotal']").contains("$3,600.00")     

    })

  })