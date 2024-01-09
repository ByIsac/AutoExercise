import ContactPage from "../support/pages/contactUs"

describe('Dado que estou na página de ContactUs', function(){

    beforeEach(function(){
        cy.fixture('data').then(function(user){
            this.data = user
        })
    })

    context('Quando preencho os campos corretamente', function(){

        const msg = 'Success! Your details have been submitted successfully.'

        it(`Deve me retornar: ${msg}` , function(){

            const data = this.data.contactUs
            const path = '/files/temp.txt'

            cy.visit('/contact_us')

            ContactPage.fillForm(data, path)
            ContactPage.submitForm()

            ContactPage.successfulTextShouldBe(msg)

        })
    })
})