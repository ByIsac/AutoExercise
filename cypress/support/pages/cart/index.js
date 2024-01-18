import { el } from './elements'

const CartPage = {

    productShouldHave: function(product, quantity) {
      cy.contains('a', product.name)
        .parents(el.productCard)
        .find(el.quantity)
        .should('have.text', quantity)

      cy.contains('a', product.name)
        .parents(el.productCard)
        .find(el.totalPrice)
        .contains(product.price*quantity)
    },

    proceedToCheckout: function() {
      cy.get(el.goToCheckout).click()
    },

    removeProduct: function(product) {
      cy.contains('a', product.name)
        .parents(el.productCard)
        .find('.cart_delete a')
        .click()
    }

}

export default CartPage