/// <reference types='Cypress' />

describe('Cypress Basic', () => {
    beforeEach(() => {
        //Visit website
      cy.visit('http://testautomationpractice.blogspot.com/')   
    })

    let tableName_xpath = "//table[@name='BookTable']"
    let tableColumnNameSelenium_xpath = "table[name=BookTable] > tbody >tr:nth-child(2) > td:nth-child(3)"
    let authorList_xpath = "table[name=BookTable] > tbody >tr td:nth-child(2)"
    let bookName_xpath = "table[name=BookTable] > tbody >tr td:nth-child(1)"

    it('Table handling ', function (){
        cy.xpath(tableName_xpath).contains('td', 'Learn Selenium').should('be.visible')
        cy.get(tableColumnNameSelenium_xpath).contains('Selenium').should('be.visible')

        cy.get(authorList_xpath).each(($e , index, $list)=>{
            const text = $e.text()
            if(text.includes('Amod')){
                cy.get(bookName_xpath).eq(index).then(function(bookName){
                    const bookname = bookName.text()
                    expect(bookname).to.equal('Master In Java')
                })
            }
        })


    })

})