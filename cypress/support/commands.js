// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';

Cypress.Commands.add("fromFillUp", (userName, userEmail, currentAddress, permanentAddress)=>{
    let userName_xpath = "//input[@id='userName']"
    let userEmail_xpath = "//input[@id='userEmail']"
    let currentAddress_xapth = "//textarea[@id='currentAddress']"
    let permanetAddress_xpath = "//textarea[@id='permanentAddress']"
    let button_xpath = "//button[@id='submit']"

    cy.xpath(userName_xpath).should('be.visible').should('be.enabled').should('be.enabled').type(userName)
    cy.xpath(userEmail_xpath).should('be.visible').should('be.enabled').type(userEmail)
    cy.xpath(currentAddress_xapth).should('be.visible').should('be.enabled').type(currentAddress)
    cy.xpath(permanetAddress_xpath).should('be.visible').should('be.enabled').type(permanentAddress)
    cy.xpath(button_xpath).should('be.visible').should('be.enabled').click()
    cy.wait(2000) 
})