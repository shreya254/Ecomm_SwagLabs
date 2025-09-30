describe('checkbox',()=>{
    it('testcase',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[type="checkbox"]').check(['option1','option2']).should('be.checked')
        cy.get('select').select('Option1').should('have.value','option1')
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($e1,index,list)=>{
            const country = $e1.text()
            if(country==="India"){
                cy.wrap($e1).click()
            }
        })
        //hid and show
        cy.get('#displayed-text').should('be.visible')
        cy.get('[value="Hide"]').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('[value="Show"]').click()
        cy.get('#displayed-text').should('be.visible')

        //Radio button
        cy.get('[value="radio1"]').check().should('be.checked')
        //alerts
        cy.get('[value="Alert"]').click()
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.get('[value="Confirm"]').click()
        cy.on('window:confirm',(str)=>{
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    })
})