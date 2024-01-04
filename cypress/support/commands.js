Cypress.Commands.add('apiDelete', (user) => {

    cy.api({
        url: 'https://automationexercise.com/api/deleteAccount',
        method: 'DELETE',
        form: true,
        body: {
            email: user.email,
            password: user.pass
        }
    }).then(response => {
        expect(response.status).to.eql(200)
    })

})

Cypress.Commands.add('apiSignup', (user) => {
    cy.api({
        url: 'https://automationexercise.com/api/createAccount',
        method: 'POST',
        form: true,
        body: {
            name: user.name,
            email: user.email,
            password: user.pass,
            title: user.title,
            birth_date: user.birthday.day,
            birth_month: user.birthday.month,
            birth_year: user.birthday.year,
            firstname: user.firstname,
            lastname: user.lastname,
            company: user.company,
            address1: user.address1,
            address2: user.address2,
            country: user.country,
            zipcode: user.zipcode,
            state: user.state,
            city: user.city,
            mobile_number: user.number

        }
    }).then(response => {
        expect(response.status).to.eql(200)
        expect(response.body).to.contains(201)
        expect(response.body).to.contains('User created!')
    })
})