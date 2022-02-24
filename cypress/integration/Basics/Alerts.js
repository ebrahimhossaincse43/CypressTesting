/// <reference types='Cypress' />

describe('Cypress Basic', () => {
    beforeEach(() => {
        //Visit website
      cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })

    //Xpath
    let js_alert  = "//button[contains(text(),'Click for JS Alert')]"
    let js_confirm  = "//button[contains(text(),'Click for JS Confirm')]"
    let js_prompt = "//button[contains(text(),'Click for JS Prompt')]"
    let result = "//p[@id='result']"

    it('JS Alert', function (){
        cy.on('window:alert', function(alertMessage){
            expect(alertMessage).to.equal('I am a JS Alert')
        })
        click(js_alert) 
        cy.xpath(result).should('have.text','You successfully clicked an alert')
        cy.wait(2000)
    })

    it('JS Confirm', function (){
        cy.on('window:confirm', function(confirmMessage){
            return true
        })
        click(js_confirm)
        cy.xpath(result).should('have.text','You clicked: Ok')
        cy.wait(2000)
    })

    it('JS Prompt', function (){
        
        cy.window().then(function($win){
            cy.stub($win, 'prompt').returns('Hello Prompt')
            click(js_prompt) 
            cy.xpath(result).should('have.text','You entered: Hello Prompt')
        })
    })
})

//custom click method
function click(xpath){
    cy.xpath(xpath).click()
}