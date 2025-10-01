describe('tables',()=>{
    it('test case', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('.table-display tr td:nth-child(2)').each(($e1 , index, list)=>{
            const sub = $e1.text()
            if(sub.includes('Python')){
                cy.get('.table-display tr td:nth-child(2)').eq(index).next().then((price)=>{
                    const priceText= price.text()
                    expect(priceText).to.equal('25')
                })
            }
        })
    })
})