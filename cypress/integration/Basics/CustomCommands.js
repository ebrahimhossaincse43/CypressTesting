/// <reference types="cypress" />

describe('Customs Commands', function () {

  //Use the cy.fixture() method to pull data from fixture file
  before(function () {
    cy.fixture('example').then(function (data) {
      this.data = data;
    })
  })

  it(' Custom Commands', function () {

    cy.visit('https://demoqa.com/text-box')  
    //Provide the data read from the fixture
    let userName = this.data.name
    let userEmail = this.data.email
    let currentAddress = this.data.currentAddress
    let permanentAddress = this.data.permanentAddress
    cy.fromFillUp(userName, userEmail, currentAddress,permanentAddress)
  })
})