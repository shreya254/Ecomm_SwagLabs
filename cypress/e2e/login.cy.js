describe('login to the application', ()=>{
    it('login',()=>{
        cy.visit('https://www.saucedemo.com')
        cy.get('input[data-test="username"]').type('standard_user')
        cy.get('input[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

       cy.urls().should('contains', 'inventory.html')

       cy.locator().should('contains', 'inventory.html')

        

    })
})