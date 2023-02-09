/// <reference types= "cypress"/>

describe('Criar conta',() =>{
    it('Novo usuario',() =>{
    cy.visit('https://www.amazon.com.br')
    cy.wait(3000)
    cy.get('#nav-link-accountList-nav-line-1').click()
    cy.get('#createAccountSubmit').click()
    cy.get('#ap_customer_name').type('Niwen dos santos')
    cy.get('#ap_email').type('teste@teste.com.br')
    cy.get('#ap_password').type('!clCA7')
    cy.get('#ap_password_check').type('!clCA7')

    })
})