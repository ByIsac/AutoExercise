import HomePage from "../support/pages/home"
import Header from "../support/components/header"
import SignupPage from "../support/pages/signup"


describe('Dado de que estou na página de login', function(){
    context('Quando preencho os campos de login com usuários válidos', function() {

        beforeEach(function(){
            cy.fixture('data').then(function(user){
                this.data = user
            })
        })

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
});
