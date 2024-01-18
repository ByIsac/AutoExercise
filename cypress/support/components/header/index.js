import { el } from "./elements"

const Header = {

   goToSignup: function(){
    cy.get(el.signupButton).click()
    cy.get(el.signupForm).should('be.visible')
   },

   loggedUserShouldHave: function(txt) {
      cy.get(el.loggedUseIcon)
        .parent()
        .should('have.text', txt)
   },
   logout: function() {
      cy.get(el.logout).click()
   },

}

export default Header