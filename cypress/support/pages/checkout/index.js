import { el } from './elements'

const CheckoutPage = {

    infosShoulBeVisible: function(user) {
        cy.get(el.addressDelivery)
          .find('li')
          .contains(user.title + '. ' + user.name)
        cy.get(el.addressDelivery)
          .find('li')
          .contains(user.company)
        cy.get(el.addressDelivery)
          .find('li')
          .contains(user.address1)         
        cy.get(el.addressDelivery)
          .find('li')
          .contains(user.address2)        
        cy.get(el.addressDelivery)
          .find('li')
          .contains(user.city + ' ' + user.state + ' ' + user.zipcode)
        cy.get(el.addressDelivery)
          .find('li')
          .contains(user.number)

        cy.get(el.addressInvoice)
          .find('li')
          .contains(user.title + '. ' + user.name)
        cy.get(el.addressInvoice)
          .find('li')
          .contains(user.company)
        cy.get(el.addressInvoice)
          .find('li')
          .contains(user.address1)         
        cy.get(el.addressInvoice)
          .find('li')
          .contains(user.address2)        
        cy.get(el.addressInvoice)
          .find('li')
          .contains(user.city + ' ' + user.state + ' ' + user.zipcode)
        cy.get(el.addressInvoice)
          .find('li')
          .contains(user.number)
    },

    goToPay: function(){
      cy.get(el.goToPay).click()
    },

    fillCardForm: function(user) {
            cy.get(el.cardName).type(user.name)
            cy.get(el.cardNumber).type(user.card.number)
            cy.get(el.cardCvc).type(user.card.cvc)
            cy.get(el.cardMonth).type(user.card.month)
            cy.get(el.cardYear).type(user.card.year)
    },

    payButton: function(){
      cy.get(el.payButton).click()
    },

    successfulOrderShouldHave: function(msg){
      cy.get(el.orderPlaced)
        .siblings('p')
        .should('have.text', msg)
    },

    downloadInvoice: function() {
      cy.get(el.downloadInvoice).click()
    }

}

export default CheckoutPage