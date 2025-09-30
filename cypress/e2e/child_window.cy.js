describe('child window',()=>{
    it('testcase',()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.origin('https://www.qaclickacademy.com/',()=>{
            cy.get("#navbarSupportedContent a[href*='about']").click()
        })

    })
})