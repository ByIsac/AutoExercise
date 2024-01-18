import HomePage from "../support/pages/home"
import Header from "../support/components/header"
import SignupPage from "../support/pages/signup"


describe('Dado de que estou na página de login', function(){

    beforeEach(function(){
        cy.fixture('data').then(function(user){
            this.data = user
        })
    })

    context('Quando preencho os campos de login com usuários válidos', function() {

        it('Então deve ser possível logar com sucesso', function() {

            const data = this.data.loginUser

            cy.apiDelete(data)
            cy.apiSignup(data)

            HomePage.go()
            Header.goToSignup()

            SignupPage.fillFormLogin(data)
            SignupPage.submitLoginForm()

            const txt = ' Logged in as '+ data.name
            Header.loggedUserShouldHave(txt)

        });
    });

    context('Quando preencho os campos de login com usuários válidos', function() {

        it('Então deve ser possível logar com sucesso', function() {

            const data = this.data.loginUser

            cy.apiDelete(data)
            cy.apiSignup(data)

            cy.visit('/login')
        
            SignupPage.fillFormLogin(data)
            SignupPage.submitLoginForm()

            const txt = ' Logged in as '+ data.name
            Header.loggedUserShouldHave(txt)

        })
    })

    context('Quando preencho os campos de Login com um usuário inválido', function(){

        const errorMsg = 'Your email or password is incorrect!'

        it('Então deve retornar a mensagem "Your email or password is incorrect!"', function(){
            const bademail = {
                email: 'testeteste@superteste.com',
                pass: '123456789',
                message: 'Your email or password is incorrect!'
            }

            cy.apiDelete(bademail)

            HomePage.go()
            SignupPage.fillFormLogin(bademail)
            SignupPage.submitLoginForm()
            SignupPage.errorMessageShouldBe(bademail.message)

        })

        const emailMessages = [
            {email: 'emailRuim', output: 'Inclua um "@" no endereço de e-mail.'},
            {email: '1231431245', output: 'Inclua um "@" no endereço de e-mail.'},
            {email: '´[´[]~]~´]', output: 'Inclua um "@" no endereço de e-mail.'},
            {email: '{enter}', output: "Preencha este campo."},
            {email: 'EMAIL GIGANTE', output: 'Inclua um "@" no endereço de e-mail.'},
        ]
    
        emailMessages.forEach(function(msg){
            context(`Quando preencho o email com "${msg.email}"`, function(){
                it(`Então o sistema deve me retornar "${msg.output}"`, function(){
                    cy.visit('/login')
    
                    SignupPage.fillFormLogin(msg)
                    SignupPage.submitLoginForm()
                    SignupPage.outputShouldBe(msg)
                })
            })   
        })

    })
});
