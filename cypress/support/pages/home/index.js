import { el } from "./elements"

const HomePage = {

    go: function() {
        cy.visit('/login')
        // cy.get(el.feauresItens).should('be.visible')
    }

}

export default HomePage