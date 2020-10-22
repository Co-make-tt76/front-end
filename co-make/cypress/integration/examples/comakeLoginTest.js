describe("CO|MAKE App", () => { 
    beforeEach(() => { 
        cy.visit("https://co-make-tan.vercel.app/")
    })

    const loginBTN = () => cy.get(' .btn-sm') 
    const emailInput = () => cy.get('[name=email]')
    const passwordInput = () => cy.get('[name=password]')
    const signInBTN = () => cy.get('.btn-primary')
    const addIssueBTN = () => cy.get('.nav-link')
    .contains('Add Issue')



    it('opens login form', () => { 
    loginBTN().should('exist')
    loginBTN().click()

    })

    it('Can login to the website', () => { 
        loginBTN().click()
        emailInput().should('exist')
        passwordInput().should('exist')
        signInBTN().should('exist')

        emailInput().last().type('shortcakes@comake.com')
        passwordInput().last().type('password')
        signInBTN().last().click()
    
        })

        it('Can add a new issue', () => { 
            addIssueBTN().should('exist')
            addIssueBTN().click()
        })

})
   

