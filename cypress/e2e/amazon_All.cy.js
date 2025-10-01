describe('Amazon',()=>{
    it('all menu',()=>{
        cy.visit('https://www.amazon.in/')
        cy.get('#nav-hamburger-menu').filter(':visible').should('have.length',1).click()
        cy.get('.category-section[aria-labelledby="Shop by Category"]').each(($e1,index,list)=>{
            const prod = $e1.find('.hmenu-item').text()
            cy.log(prod)
            // if(prod.includes("Bestsellers")){
            //     cy.wrap($e1).click()
            // }
        })

    })
})