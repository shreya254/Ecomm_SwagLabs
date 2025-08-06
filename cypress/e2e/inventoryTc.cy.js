import LoginPage from '../support/pages/login'
import inventoryPage from '../support/pages/inventory'


describe('inventory page testcases',()=>{
    beforeEach(()=>{
        LoginPage.visit()
        LoginPage.login('standard_user','secret_sauce')
    })
    it('should display 6 products',()=>{
        inventoryPage.getInventoryItem().should('have.length',6)
    })
    it('should have name description price',()=>{
        inventoryPage.getInventoryItem().each(($ele)=>{
            cy.wrap($ele).find('.inventory_item_name ').should('be.visible')
            cy.wrap($ele).find('.inventory_item_desc').should('be.visible')
            cy.wrap($ele).find('.inventory_item_price').should('be.visible')
        })
        
    
    })
    it('add item to cart and badge count',()=>{
        inventoryPage.clickAddtocartButton('Sauce Labs Backpack')
        inventoryPage.clickAddtocartButton('Sauce Labs Bike Light')
        inventoryPage.getBadgeCount().should('contain',2)
    })
})