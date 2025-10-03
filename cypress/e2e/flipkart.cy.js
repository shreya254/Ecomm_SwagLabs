describe('flipkart',()=>{
    it('testcase',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('.Pke_EE').type('iphone')
        cy.contains("iphone 15").click({force:true})
        cy.get('.CGtC98').eq(0).invoke('removeAttr','target').click()
        cy.get('.QqFHMw').contains('Add to cart').click()
            
        
    })
})