describe('mousehover',()=>{
    it('testcase',()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force:true})
    })
})
describe('childWindow',()=>{
    it('testCase',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').then(function(el){
            const url =el.prop("href")
            cy.visit(url)
            cy.origin(url,()=>{
                cy.get('.ml-auto a[href*="about"]').click()
                cy.url().should('include','about')
            })
        })
    })
})