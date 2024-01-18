import { el } from './elements'

const ProductsPage = {

    shouldBeVisible: function() {
        cy.get(el.title).should('be.visible')
    },

    searchProduct: function(product) {
        cy.get(el.searchInput).type(product.name)
        cy.get(el.submitSearch).click()
    },

    searchedShouldBeVisible: function(product) {
        cy.get(el.cardName).should('have.text', product.name)
    },

    goToProductDetails: function(product) {
        cy.get(el.cardName)
          .contains(product.name)
          .parents(el.card)
          .find(el.goProductDetails)
          .click()
    },

    detailsShouldBeVisible: function(product) {
        cy.contains('h2', product.name).should('be.visible')
        cy.contains('p', product.category).should('be.visible')
        cy.contains('span', product.price).should('be.visible')
        cy.contains('p', product.availability).should('be.visible')
        cy.contains('p', product.condition).should('be.visible')
        cy.contains('p', product.brand).should('be.visible')
    },
    
    addProduct: function(product) {
        cy.get(el.cardName)
          .contains(product.name)
          .parents(el.productInfo)
          .find(el.cardAddToCart)
          .click()
    },

    modifyQuantity: function(quantity) {
        cy.get(el.inputQuantity)
          .clear()
          .type(quantity)
    },

    addToCart: function(){
        cy.get(el.addToCart).click()
    }


    

}

export default ProductsPage