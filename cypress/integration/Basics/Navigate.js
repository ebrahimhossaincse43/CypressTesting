/// <reference types='Cypress' />

describe('Cypress Basic', () => {
    beforeEach(() => {
        //Visit website
      cy.visit('https://the-internet.herokuapp.com/')
    })

    it('Navigate ', function (){
        let dropDown = "//a[contains(text(),'Dropdown')]"
        let dropDownText = "//h3[contains(text(),'Dropdown List')]"
        let dynamicContent = "//a[contains(text(),'Dynamic Content')]"
        let dynamicContentText = "//h3[contains(text(),'Dynamic Content')]"
        let dynamicContentClickHere = "//a[contains(text(),'click here')]"

        click(dropDown)
        cy.xpath(dropDownText).should('have.text','Dropdown List')
        
        cy.go('back')

        click(dynamicContent)
        cy.xpath(dynamicContentText).should('have.text','Dynamic Content')

        click(dynamicContentClickHere)
        cy.wait(1000)
        //back
        cy.go('back') //cy.go(-1)
        //forward
        cy.go('forward') //cy.go(1)
        cy.reload()

    })

})

//custom click method
function click(xpath){
    cy.xpath(xpath).click()
}