import Header from "../support/components/header"
import Modal from "../support/components/modal"
import Subscription from "../support/components/subscription"
import CartPage from "../support/pages/cart"
import CheckoutPage from "../support/pages/checkout"
import ProductsPage from "../support/pages/products"
import SignupPage from "../support/pages/signup"

describe('Dado que estou na Cart Page', function() {

    beforeEach(function(){
        cy.fixture('data').then(function(user){
            this.data = user.products
            this.user = user.registerUser
            this.loggedUser = user.loginUser
        })
    })

    context('Quando preencho o campo de subscription devidamente', function(){

        const email = 'email-az-treinamento@mail.com'
        const msg = 'You have been successfully subscribed!'

        it(`Então o sistema deve me retornar: '${msg}'`, function(){
            cy.visit('/view_cart')
            
            Subscription.subscriptionFill(email)
            Subscription.subscriptionSubmit()
            Subscription.subscriptionMsgShouldBe(msg)
            
            
        })
    })

    context('Quando possuo produtos adicionados ao carrinho', function(){

        it(`Então deve ser possível validar Preço, Quantidade e Valor total'`, function(){

            const product = this.data
            const quantity = 1

            cy.visit('/products')
            ProductsPage.shouldBeVisible()

            ProductsPage.addProduct(product.men_tshirt)
            Modal.addedMessageShouldBe('Your product has been added to cart.')
            Modal.closeButton()

            ProductsPage.addProduct(product.sleeveless_dress)
            Modal.addedMessageShouldBe('Your product has been added to cart.')
            Modal.blueAction()

            CartPage.productShouldHave(product.men_tshirt, quantity)
            CartPage.productShouldHave(product.sleeveless_dress, quantity)
            
        })

        it('Então deve ser possível remover um dos produtos', function() {
            

            const product = this.data
            const quantity = 1

            cy.visit('/products')
            ProductsPage.shouldBeVisible()

            ProductsPage.addProduct(product.men_tshirt)
            Modal.addedMessageShouldBe('Your product has been added to cart.')
            Modal.closeButton()

            ProductsPage.addProduct(product.sleeveless_dress)
            Modal.addedMessageShouldBe('Your product has been added to cart.')
            Modal.blueAction()

            CartPage.productShouldHave(product.men_tshirt, quantity)
            CartPage.productShouldHave(product.sleeveless_dress, quantity)

            CartPage.removeProduct(product.men_tshirt)
            CartPage.productShouldHave(product.sleeveless_dress, quantity)

        })
    })

    context('Quando possuo mais de uma unidade do mesmo produto adicionado ao carrinho', function(){

        it(`Então deve ser possível validar a quantidade total`, function(){

            const product = this.data
            const quantity = 4

            cy.visit('/products')
            ProductsPage.shouldBeVisible()

            ProductsPage.goToProductDetails(product.sleeveless_dress)
            ProductsPage.modifyQuantity(quantity)
            ProductsPage.addToCart()

            Modal.blueAction()
            
            CartPage.productShouldHave(product.sleeveless_dress, quantity)
            
        })
    })

    context('Quando já possuo produtos no carrinho', function(){

        it('Então o sistema deve manter os produtos após realizar o cadastro', function(){

            const user = this.user
            const product = this.data
            const quantity = 1

            cy.apiDelete(user)

            cy.visit('/products')
            ProductsPage.shouldBeVisible()

            ProductsPage.addProduct(product.men_tshirt)
            Modal.addedMessageShouldBe('Your product has been added to cart.')
            Modal.closeButton()

            ProductsPage.addProduct(product.sleeveless_dress)
            Modal.addedMessageShouldBe('Your product has been added to cart.')
            Modal.blueAction()

            CartPage.productShouldHave(product.men_tshirt, quantity)
            CartPage.productShouldHave(product.sleeveless_dress, quantity)
            CartPage.proceedToCheckout()

            Modal.blueAction()

            SignupPage.shouldBeVisible()
            cy.uiSignup(user)

            cy.visit('/view_cart')

            const userName = ' Logged in as '+ user.name
            Header.loggedUserShouldHave(userName)
            CartPage.productShouldHave(product.men_tshirt, quantity)
            CartPage.productShouldHave(product.sleeveless_dress, quantity)

            CartPage.proceedToCheckout()
            
            CheckoutPage.infosShoulBeVisible(user)

        })

        it('Então o sistema deve manter os produtos após realizar o login', function() {
            const user = this.loggedUser
            const product = this.data
            const quantity = 1

            cy.apiDelete(user)
            cy.apiSignup(user)

            cy.visit('/products')
            ProductsPage.shouldBeVisible()

            ProductsPage.addProduct(product.men_tshirt)
            Modal.addedMessageShouldBe('Your product has been added to cart.')
            Modal.closeButton()

            ProductsPage.addProduct(product.sleeveless_dress)
            Modal.addedMessageShouldBe('Your product has been added to cart.')
            Modal.blueAction()

            CartPage.productShouldHave(product.men_tshirt, quantity)
            CartPage.productShouldHave(product.sleeveless_dress, quantity)
            CartPage.proceedToCheckout()

            Modal.blueAction()

            SignupPage.shouldBeVisible()
            
            cy.uiLogin(user)

            cy.visit('/view_cart')

            const userName = ' Logged in as '+ user.name
            Header.loggedUserShouldHave(userName)
            CartPage.productShouldHave(product.men_tshirt, quantity)
            CartPage.productShouldHave(product.sleeveless_dress, quantity)

            CartPage.proceedToCheckout()
            
            CheckoutPage.infosShoulBeVisible(user)
        })
    })
})