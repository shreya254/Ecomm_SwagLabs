describe('checkout flow',()=>{
    it("Testcase",()=>{
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('[type="search"]').type("ca")
        cy.get('.products').as('productsLocator')
        cy.get('@productsLocator').find('.product').each(($e1, index, list)=>{
            const item = $e1.find('.product-name').text()
            if(item.includes('Cashew')){
                $e1.find('button').click()
                
            }
            
        })
        cy.get('.cart-icon').click()
            cy.contains('PROCEED TO CHECKOUT').click()
            cy.contains('Place Order').click()

    })
})