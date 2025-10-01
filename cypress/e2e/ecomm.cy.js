describe('ecomm',()=>{
    it('testcase',()=>{
        cy.visit('https://rahulshettyacademy.com/loginpagePractise/')
        cy.get('#username').type("rahulshettyacademy")
        cy.get('#password').type('learning')
        cy.contains('Sign In').click()
        cy.contains('Shop Name').should('be.visible')
        cy.get('app-card').should('have.length',4)
        cy.get('app-card').filter(':contains("Nokia Edge")').then($element=>{
            cy.wrap($element).contains('Add').click()
        })
        let sum=0
        cy.get('app-card').eq(0).contains('button','Add').click()
        cy.contains('a', 'Checkout').click()
        cy.get('tr td:nth-child(4) strong').each(($e1=>{
            const amount= Number($e1.text().split(" ")[1].trim())
             sum = sum + amount
        })).then(()=>{
            expect(sum).to.be.lessThan(200000)
        })
        cy.contains('Checkout').click()
        cy.get('.validate').type("india").wait(6000)
        cy.get('.suggestions ul li').click()
        cy.get('[value="Purchase"]').click()
        cy.get('.alert').should('contain','Success!')
        

    })
})