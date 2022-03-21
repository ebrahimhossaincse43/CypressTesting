/// <reference types="cypress" />

describe('Video Recording', function () {

    //Use the cy.fixture() method to pull data from fixture file
    before(function () {
      cy.fixture('example').then(function (data) {
        this.data = data;
      })
    })
  
    it('Fixtures', function () {
  
      let userName_xpath = "//input[@id='userName']"
      let userEmail_xpath = "//input[@id='userEmail']"
      let currentAddress_xapth = "//textarea[@id='currentAddress']"
      let permanetAddress_xpath = "//textarea[@id='permanentAddress']"
      let button_xpath = "//button[@id='submit']"
  
      cy.visit('https://demoqa.com/text-box')  
      //Provide the data read from the fixture
      cy.xpath(userName_xpath).should('be.visible').should('be.enabled').should('be.enabled').type(this.data.name)
      cy.xpath(userEmail_xpath).should('be.visible').should('be.enabled').type(this.data.email)
      cy.xpath(currentAddress_xapth).should('be.visible').should('be.enabled').type(this.data.currentAddress)
      cy.xpath(permanetAddress_xpath).should('be.visible').should('be.enabled').type(this.data.permanentAddress)
      cy.xpath(button_xpath).should('be.visible').should('be.enabled').click()
      cy.wait(2000) 
    })
  })

  // For Vide Recording Using this command from command line : npx cypress run --spec cypress\integration\Basics\VideoRecording.js