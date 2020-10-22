describe("CO|MAKE App", () => { 
    beforeEach(() => { 
        cy.visit("https://co-make-tan.vercel.app/")
    })

    const loginBTN = () => cy.get(' .btn-sm') 
    const emailInput = () => cy.get('[name=email]')
    const passwordInput = () => cy.get('[name=password]')
    const signInBTN = () => cy.get('.btn-primary')

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

})
   

