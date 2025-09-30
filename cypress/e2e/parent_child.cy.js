//describe("parent_child",()=>{
    it("parent_child testcase",()=>{
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        //cy.get('.search-keyword').type("cu")
        //cy.get(".products").find('.product').should('be.visible').should('have.length',2)
        cy.get('.products').find('.product').each(($e1, index, list) => {
            const veg = $e1.find('.product-name').text()
            if(veg.includes("Cashews")){
                cy.wrap($e1).contains('ADD TO CART').click()
            }

        })
    })
//})

describe("amazon",()=>{
    it("all items",()=>{
        cy.visit('https://www.amazon.in/')
        cy.get('.hm-icon-label ').contains('All').click()
        cy.get('.category-section ul li').each(($e1,index,list)=>{
            const item = $e1.find('.hmenu-item').text()
            if(item.includes("Men's Fashion")){
                cy.wrap($e1).click()
            }
            
        })
        
       
    })
})

