class inventoryPage{
    getInventoryItem(){
        return cy.get('.inventory_item')
    }
    getInventoryItemName(){
        return cy.get('.inventory_item_name ')
    }
    getInventoryItemDescription(){
        return cy.get('.inventory_item_desc')
    }
    getInventoryItemPrice(){
        return cy.get('.inventory_item_price')
    }
    getAddtocartButton(){
        return cy.get('[data-test="add-to-cart]')
    }
    getBadgeCount(){
        return cy.get('.shopping_cart_badge')
    }
    clickAddtocartButton(productName){
        return cy.contains('.inventory_item', productName).find('button').click()
    }



}
export default new inventoryPage();