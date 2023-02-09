/// <reference types= "cypress"/>

describe('Adicionar produtos carrinho ',() =>{
    
    it('Validar valor dos produtos ',() =>{
    
        cy.visit('https://www.amazon.com.br')
    cy.get('#twotabsearchtextbox').type('Geladeira')
    cy.get('#nav-search-submit-button').click()
    cy.get('[data-index="2"] > .sg-col-inner > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > .s-card-container > .a-spacing-base > .s-product-image-container > .rush-component > .a-link-normal > .a-section > .s-image').click()
    cy.get('#add-to-cart-button').click()
    
    

    cy.get('#twotabsearchtextbox').type('Fogao')
    cy.get('#nav-search-submit-button').click()
    cy.get('[data-index="2"] > .sg-col-inner > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > .s-card-container > .a-spacing-base > .s-product-image-container > .rush-component > .a-link-normal > .a-section > .s-image').click()
    cy.get('#add-to-cart-button').click()
    


    cy.get('#twotabsearchtextbox').type('televisor')
    cy.get('#nav-search-submit-button').click()
    cy.get('[data-asin="B0BBSTZR9C"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .s-product-image-container > .rush-component > .a-link-normal > .a-section > .s-image').click()
    cy.get('#add-to-cart-button').click()
   

    cy.get('#sw-subtotal > :nth-child(2) > .a-price > [aria-hidden="true"]').should('contain','R$12.547,90')

    })
})