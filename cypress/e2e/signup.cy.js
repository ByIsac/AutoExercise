import HomePage from "../support/pages/home"
import Header from "../support/components/header"
import SignupPage from "../support/pages/signup"

describe('Dado que estou na página de cadastro', function(){

    beforeEach(function(){
        cy.fixture('data').then(function(user){
            this.data = user
        })
    })


    context('Quando preencho com dados válidos', function() {

        it('Então deve ser possível cadastrar com sucesso', function() {

            const data = this.data.registerUser

            cy.apiDelete(data)

            HomePage.go()
            Header.goToSignup()

            SignupPage.fillSignupForm(data)
            SignupPage.submitSignupForm()
            SignupPage.valueShouldBe(data)

            SignupPage.fillForm(data)
            SignupPage.submit()
            SignupPage.successfulTxtShouldBe('Account Created!')

            
            // cy.visit('https://automationexercise.com/');
            // cy.get('div[class="features_items"]').should('be.visible')

            // cy.get('a[href="/login"]').click()

            // cy.get('div[class="signup-form"]').should('be.visible')

            // cy.get('input[data-qa="signup-name"]').type('Isac Oliveira');
            // cy.get('input[data-qa="signup-email"]').type('Isac.olveira@mail.com');

            // cy.get('button[data-qa="signup-button"]').click()

            // cy.get('input[type="password"]').type('SuperSenha123@');
            // cy.get('input[data-qa="name"]').type('Isac');
            // cy.get('data-qa="last_name"').type('Oliveira');
            // cy.get('input[data-qa="address"]').type('Rua A, 500');
            // cy.get('data-qa="state"').type('Ceará');
            // cy.get('input[data-qa="city"]').type('Fortaleza');
            // cy.get('input[data-qa="zipcode"]').type('60000000');
            // cy.get('input[data-qa="mobile_number"]').type('85988888888');


        });
    });



    context('Quando preencher a tela de formulário', function() {

        const message = 'Email Address already exist!'


        it('Então todos os campos devem permanecer preenchidos ', function() {

            const data = this.data.duplicatedUser

            cy.apiDelete(data)
            cy.apiSignup(data)

            HomePage.go()
            Header.goToSignup()

            SignupPage.fillSignupForm(data)
            SignupPage.submitSignupForm()
            SignupPage.errorMessageShouldBe(message)


            // cy.visit('https://automationexercise.com/');
            // cy.get('div[class="features_items"]').should('be.visible')

            // cy.get('a[href="/login"]').click()

            // cy.get('div[class="signup-form"]').should('be.visible')

            // cy.get('input[data-qa="signup-name"]').type('Isac Oliveira');
            // cy.get('input[data-qa="signup-email"]').type('Isac.olveira@mail.com');

            // cy.get('button[data-qa="signup-button"]').click()

            // cy.get('input[type="password"]').type('SuperSenha123@');
            // cy.get('input[data-qa="name"]').type('Isac');
            // cy.get('data-qa="last_name"').type('Oliveira');
            // cy.get('input[data-qa="address"]').type('Rua A, 500');
            // cy.get('data-qa="state"').type('Ceará');
            // cy.get('input[data-qa="city"]').type('Fortaleza');
            // cy.get('input[data-qa="zipcode"]').type('60000000');
            // cy.get('input[data-qa="mobile_number"]').type('85988888888');


        });
    });
});