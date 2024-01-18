import ProductsPage from "../support/pages/products"


describe('Dado que estou na Products Page', function() {

    beforeEach(function(){
        cy.fixture('data').then(function(user){
            this.data = user.products
        })
    })
    

    context('Quando pesquiso por um produto', function() {
        it('Então o site deve me retornar as informações do produto corretamente', function() {

            const product = this.data.men_tshirt

            cy.visit('/products')

            ProductsPage.shouldBeVisible()

            ProductsPage.searchProduct(product)
            ProductsPage.searchedShouldBeVisible(product)
            ProductsPage.goToProductDetails(product)

            ProductsPage.detailsShouldBeVisible(product)
        })
    })
})