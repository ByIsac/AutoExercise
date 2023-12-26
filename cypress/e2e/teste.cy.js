describe('Dado que preciso de um log', function(){
    context('Quando eu estruturo no padrão mocha', function() {
        it('Então o cypress deve me relatar', function() {
            cy.visit('https://automationexercise.com/');
            cy.get('div[class="features_items"]').should('be.visible')

            cy.get('a[href="/login"]').click()

            cy.get('div[class="signup-form"]').should('be.visible')

            cy.get('input[data-qa="signup-name"]').type('Isac Oliveira');
            cy.get('input[data-qa="signup-email"]').type('Isac.olveira@mail.com');

            cy.get('button[data-qa="signup-button"]').click()

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

describe('Dado que já tenha entrado na tela de cadastro', function(){
    context('Quando preencher a tela de formulário', function() {
        it('Então todos os campos devem permanecer preenchidos ', function() {
            cy.visit('https://automationexercise.com/');
            cy.get('div[class="features_items"]').should('be.visible')

            cy.get('a[href="/login"]').click()

            cy.get('div[class="signup-form"]').should('be.visible')

            cy.get('input[data-qa="signup-name"]').type('Isac Oliveira');
            cy.get('input[data-qa="signup-email"]').type('Isac.olveira@mail.com');

            cy.get('button[data-qa="signup-button"]').click()

            cy.get('input[type="password"]').type('SuperSenha123@');
            cy.get('input[data-qa="name"]').type('Isac');
            cy.get('data-qa="last_name"').type('Oliveira');
            cy.get('input[data-qa="address"]').type('Rua A, 500');
            cy.get('data-qa="state"').type('Ceará');
            cy.get('input[data-qa="city"]').type('Fortaleza');
            cy.get('input[data-qa="zipcode"]').type('60000000');
            cy.get('input[data-qa="mobile_number"]').type('85988888888');


        });
    });
});