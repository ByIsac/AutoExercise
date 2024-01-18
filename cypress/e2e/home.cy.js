import Subscription from "../support/components/subscription"

describe('Dado que estou na home page', function() {
    context('Quando preencho o campo de subscription devidamente', function(){

        const email = 'email-az-treinamento@mail.com'
        const msg = 'You have been successfully subscribed!'

        it(`Então o sistema deve me retornar: '${msg}'`, function(){
            cy.visit('/')
            
            Subscription.subscriptionFill(email)
            Subscription.subscriptionSubmit()
            Subscription.subscriptionMsgShouldBe(msg)
            
        })
    })
})