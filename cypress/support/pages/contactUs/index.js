import { el } from "./elements"

const ContactPage = {

        fillForm: function(user, path){
            cy.get(el.name).type(user.name)
            cy.get(el.email).type(user.email)
            cy.get(el.subject).type(user.subject)
            cy.get(el.message).type(user.message)

            cy.get(el.file).attachFile(path)
        },

        submitForm: function(){
            cy.get(el.submitButton).click()
        },

        successfulTextShouldBe: function(msg) {
            cy.get(el.sucessfullMessage)
              .should('have.text', msg)
        }

}

export default ContactPage