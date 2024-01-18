import { el } from './elements'

const Modal = {

    addedMessageShouldBe: function(txt) {
        cy.contains(el.addedMessage, txt)
    },

    blueAction: function() {
        cy.get(el.blueButton).click()
    },

    closeButton: function() {
        cy.get(el.closeButton).click()
    }

}

export default Modal