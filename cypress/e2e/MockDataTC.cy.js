describe('MockData',()=>{
    it('testCase',()=>{
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        
        cy.intercept({
            method: 'GET',
            url:"https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty"
        },
        {
            statusCode : 200,
            body :[
    {
        "book_name": "RestAssured with Java",
        "isbn": "LSA",
        "aisle": "2303"
    },
    {
        "book_name": "RestAssured with Java",
        "isbn": "LSA",
        "aisle": "2303"
    }
        ]
        }).as('bookretrivals')
        cy.contains('button', ' Virtual Library ').click()
        cy.wait('@bookretrivals')
        cy.get('p').should('have.text',"Oops only 1 Book available")

    })
})