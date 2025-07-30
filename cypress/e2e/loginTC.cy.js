
import LoginPage from '../support/pages/login'
describe('Login tests',()=>{
    beforeEach (()=>{
        LoginPage.visit()
    })
    it('Login with valid credentials',()=>{
        LoginPage.login('standard_user','secret_sauce')
        cy.url().should('include','/inventory.html')
    })
    it('Login with invalid credentials',()=>{
        LoginPage.login('locked_out_user','secret_sauce')
        cy.get('[data-test="error"]').should('be.visible')
    })
})