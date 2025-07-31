
import LoginPage from '../support/pages/login'
describe('Login tests',()=>{
    beforeEach (()=>{
        LoginPage.visit()
    })
    it('Login with valid credentials',()=>{
        LoginPage.login('standard_user','secret_sauce')
        cy.url().should('include','/inventory.html')
    })
    it('Login with locked credentials',()=>{
        LoginPage.login('locked_out_user','secret_sauce')
        cy.get('[data-test="error"]').should('contain',"Epic sadface: Sorry, this user has been locked out.")
    })
    it('Login with invalid password',()=>{
        LoginPage.login('standard_user', "Qwerty2123")
        cy.get('[data-test="error"]').should('contain',"Epic sadface: Username and password do not match any user in this service")
    
    })
    it('Login with empty user name and password',()=>{
        LoginPage.login('','')
        cy.get('[data-test="error"]').should('contain', "Epic sadface: Username is required")

    })
    it('Login with empty password',()=>{
        LoginPage.login('standard_user', '')
        cy.get('[data-test="error"]').should('contain','Epic sadface: Password is required')

    })
    it('Login with empty username',()=>{
        LoginPage.login('','secret_sauce')
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username is required')
        
    })
    it('show error icons',()=>{
        LoginPage.login('','')
        cy.get('[data-icon="times-circle"]').should('have.length',2)
    })

})