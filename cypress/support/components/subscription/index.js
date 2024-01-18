import { el } from './elements'

const Subscription = {

    subscriptionFill: function(email) {
        cy.get(el.inputSubscription).type(email)
    },

    subscriptionSubmit: function(){
        cy.get(el.submitSubscription).click()
    },

    subscriptionMsgShouldBe: function(msg){
        cy.get(el.validationMessage).should('have.text', msg)
    }

}

export default Subscription