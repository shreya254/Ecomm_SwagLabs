class LoginPage{
    visit(){
        cy.visit("https://www.saucedemo.com/")
    }
    getUsername(){
        return cy.get('#user-name')
    }
    getPassword(){
        return cy.get('#password')
    }
    getLoginbutton(){
        return cy.get('#login-button')
    }
    login(username,password){
        this.getUsername().type(username)
        this.getPassword().type(password)
        this.getLoginbutton().click()
    }
}
export default new LoginPage()