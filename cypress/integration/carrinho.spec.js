/// <reference types= "cypress"/>

describe('Adicionar produto carrinho ',() =>{
    it('Validar o produto no carrinho',() =>{
    cy.visit('https://www.amazon.com.br')
    cy.get('#twotabsearchtextbox').type('Iphone')
    cy.get('#nav-search-submit-button').click()
    cy.get('[data-index="4"] > .sg-col-inner > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > .s-card-container > .a-spacing-base > .s-product-image-container > .rush-component > .a-link-normal > .a-section > .s-image').click()
    cy.get('#add-to-cart-button').click()
    cy.get('#attachSiAddCoverage').click()
    cy.get('.a-size-medium-plus').should('contain' ,'Adicionado ao carrinho')



    })
})