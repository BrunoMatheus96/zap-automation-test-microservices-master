import { should } from 'chai'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { stringify } from 'querystring'

Then('o sistema deve retornar um status code {int}', (statusCode) => {
    cy.get('@res').should((response) => {
     // cy.log("debug" , JSON.stringify(response)),
      //@ts-ignore
      expect(statusCode).to.equal(response.status)
    })
})

Then(`valido se recebo a mensagem de erro {string}`, (message) => {
    cy.get('@res').then((response) => {
       // cy.log("debug" , JSON.stringify(response.body))
        //@ts-ignore
        expect(JSON.stringify(response.body.errors)).to.have.string(message.toString())
    })
})