///<reference types="cypress"/>

describe('home page', ()=>{
    it('acessar home page', ()=>{
        cy.visit('https://automationexercise.com/')
        cy.title()
        .should('be.equal', 'Automation Exercise')
        .and('contain', 'Auto')
    })
    it('Cdastrar novo usuario', ()=>{
        cy.visit('https://automationexercise.com/')
        cy.get('i[class="fa fa-lock"]').click()
        cy.get('div [class="signup-form"] h2').should('have.text', 'New User Signup!')

        cy.get('input[data-qa="signup-name"]').type('Teste de novo usuario')
        cy.get('input[data-qa="signup-email"]').type('rerohi6446@letpays.com')
        cy.get('button[data-qa="signup-button"]').click()

        cy.get('input[value="Mr"] ').click()
        //cy.get('input[data-qa="name"] ').should('have.value', 'Teste de novo usuario')
        cy.get('input[data-qa="email"] ').should('have.value', 'rerohi6446@letpays.com')
        cy.get('input[data-qa="password"] ').type('Teste123')
        cy.get('div[class="selector"] [data-qa="days"]').select('16')
        cy.get('div[class="selector"] [data-qa="months"]').select('December')
        cy.get('div[class="selector"] [data-qa="years"]').select('1986')
        cy.get('input[type="checkbox"][name="newsletter"]').click()
        cy.get('input[type="checkbox"][name="optin"]').click()
        cy.get('input[data-qa="first_name"]').type('Elias')
        cy.get('input[data-qa="last_name"]').type('Silva Teste 123')
        cy.get('input[data-qa="company"]').type('empresa teste')
        cy.get('input[data-qa="address"]').type('Rua Lourenco Rodrigues Sousa')
        cy.get('input[data-qa="address2"]').type('1234')
        cy.get('select[data-qa="country"]').select('United States')
        cy.get('input[data-qa="state"]').type('São Paulo')
        cy.get('input[data-qa="city"]').type('São Paullo')
        cy.get('input[data-qa="zipcode"]').type('0276050')
        cy.get('input[data-qa="mobile_number"]').type('11981447724')
        cy.get('button[data-qa="create-account"]').click()
        





    })
})