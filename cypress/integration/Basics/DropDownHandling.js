/// <reference types='Cypress' />

describe('Cypress Basic', () => {
    beforeEach(() => {
        //Visit website
      cy.visit('https://phptravels.net/')   
    })

    let language_xpath = "//button[@id='languages']"
    let specificLanguage_xpath = "//div[@class='header-right-action pt-1 pe-2 multi_language']/div/ul/li"
    


    it('Drop Down handling ', function (){
        this.skip()
        cy.xpath(language_xpath).should('be.visible').click()
        cy.xpath(specificLanguage_xpath).should('be.visible').click()
        
    })

    it("By usinh select", function (){
        this.skip()
        cy.visit("https://www.facebook.com/")
        cy.xpath("//select [@id- 'day']") . select ("15")
    })

    it("8y using without select tag", function(){
        //cy.visit("https://www.phptravels.net/home")
        cy.xpath(language_xpath).click()
        cy.get('.multi_language > .dropdown > .dropdown-menu >').each(($el, index, $1ist)=>{
        var lan =  $el.text()
        if(lan == ' Arabic')
        {
            cy. wrap($el).click()
        }
        })
    })      
})