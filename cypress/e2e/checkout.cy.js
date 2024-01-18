import Modal from "../support/components/modal"
import CartPage from "../support/pages/cart"
import CheckoutPage from "../support/pages/checkout"
import ProductsPage from "../support/pages/products"

describe('Dado que estou na Checkout Page', function(){

    beforeEach(function(){
        cy.fixture('data').then(function(user){
            this.data = user.products
            this.loggedUser = user.loginUser
        })
    })

    context('Quando finalizado um pedido', function(){
        it('Então deve ser possível validar o download', function(){
            const user = this.loggedUser
            const product = this.data
            const quantity = 1
            const file = 'invoice.txt'

            cy.apiDelete(user)
            cy.apiSignup(user)

            cy.visit('/login')
            cy.uiLogin(user)

            cy.visit('/products')

            ProductsPage.shouldBeVisible()

            ProductsPage.addProduct(product.sleeveless_dress)
            Modal.addedMessageShouldBe('Your product has been added to cart.')
            Modal.blueAction()

            CartPage.productShouldHave(product.sleeveless_dress, quantity)
            CartPage.proceedToCheckout()
            
            CheckoutPage.infosShoulBeVisible(user)

            CheckoutPage.goToPay()
            CheckoutPage.fillCardForm(user)

            CheckoutPage.payButton()
            CheckoutPage.successfulOrderShouldHave('Congratulations! Your order has been confirmed!')

            CheckoutPage.downloadInvoice()
            cy.checkFileExistence(file)
        })
    })  
})