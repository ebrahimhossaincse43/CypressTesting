describe('Tutorialspoint Test', function () {
    // test case
    it("Scenario 1", function () {
       //URL launched
       cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
       //complete page screenshot with filename - CompletePage
       cy.screenshot('CompletePage')
       //screenshot of particular element
       cy.get(':nth-child(2) > button').screenshot()
    });
 });