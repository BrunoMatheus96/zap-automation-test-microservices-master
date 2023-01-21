import { Given, When, Then, And, But } from 'cypress-cucumber-preprocessor/steps'
import { identity } from 'cypress/types/lodash'

let baseUrl = Cypress.config('baseUrl')
let _id = Number
let _length = Number

//Cadastro de usuário (Fluxos de sucesso) - 1
Given('que a pessoa não possui uma conta na Herupu',()=>{})
When('realizar a requisição da URL {string} para criação de uma conta na Herupu informando nome {string}, email {string}, data de nascimento {string}, codigo pessoa {string}, zip code {string}', (url, nome, email, ndata, cpf, zip_code) => {
   cy.request({
      method: 'POST',
      form: false,
      url: `${baseUrl}${url}`,
      body: {
         "name": nome,
         "email": email,
         "birth_date": ndata,
         "cpf": cpf,
         "zip_code": zip_code
      },
      headers: {
         'Accept': '*/*',
         'Content-Type': 'application/json'
      },
      failOnStatusCode: false
   }).as('res').then((response) => {
      _id = response.body.id
   })
})
And('validar o response body de Cadastro de usuário', () => {
   cy.get('@res').then((response) => {
      //@ts-ignore
      expect(response.body).to.be.a('object')
      //@ts-ignore
      expect(response.body.birth_date).to.be.a('string')
      //@ts-ignore
      expect(response.body.cpf).to.be.a('string')
      //@ts-ignore
      expect(response.body.email).to.be.a('string')
      //@ts-ignore
      expect(response.body.id).to.be.a('number')
      //@ts-ignore
      expect(response.body.name).to.be.a('string')
      //@ts-ignore
      expect(response.body.zip_code).to.be.a('string')
   })
})

//Atualização de usuário (Fluxos de sucesso) - 2
Given('que o cliente já está cadastrado',()=>{})
But('quer alterar um dos dados cadastrados',()=>{})
When('realizar a requisição da URL {string} para alteração de uma conta na Herupu informando nome {string}, email {string}, data de nascimento {string}, codigo pessoa {string}, zip code {string}', (url, nome, email, ndata, cpf, zip_code) => {
   cy.request({
      method: 'PUT',
      form: false,
      url: `${baseUrl}${url}`,
      body: {
         "id": _id,
         "name": nome,
         "email": email,
         "birth_date": ndata,
         "cpf": cpf,
         "zip_code": zip_code
      },
      headers: {
         'Accept': '*/*',
         'Content-Type': 'application/json'
      },
      failOnStatusCode: false
   }).as('res')
})
And('validar o response body de atualização de usuário', () => {
   cy.get('@res').then((response) => {
      //@ts-ignore
      expect(response.body).to.be.a('object')
      //@ts-ignore
      expect(response.body.birth_date).to.be.a('string')
      //@ts-ignore
      expect(response.body.cpf).to.be.a('string')
      //@ts-ignore
      expect(response.body.email).to.be.a('string')
      //@ts-ignore
      expect(response.body.id).to.be.a('number')
      //@ts-ignore
      expect(response.body.name).to.be.a('string')
      //@ts-ignore
      expect(response.body.zip_code).to.be.a('string')
   })
})

//Busca de clientes (Fluxos de sucesso) - 3
Given('que temos usuários já cadastrados na Herupu',()=>{})
When('realizar a requisição da URL {string} para a busca da lista dos clientes', (url) => {
   cy.request({
      method: 'GET',
      form: false,
      url: `${baseUrl}${url}`,
      headers: {
         'Accept': '*/*',
         'Content-Type': 'application/json'
      },
      failOnStatusCode: false
   }).as('res').then((response) => {
      _length = response.body.length
   })
})
And('validar o response body de busca de usuário', () => {
   cy.get('@res').then((response) => {
      //@ts-ignore
      for (let n = 0; n <= (_length - 1); n++) {
         //@ts-ignore
         expect(response.body[n]).to.be.a('object')
         //@ts-ignore
         expect(response.body[n].email).to.be.a('string')
         //@ts-ignore
         expect(response.body[n].id).to.be.a('number')
         //@ts-ignore
         expect(response.body[n].name).to.be.a('string')
      }
   })
})

//Busca de clientes (Fluxos de sucesso) - 4
And('queremos buscar um usuário específico pelo id',()=>{})
When('realizar a requisição da URL {string} para a busca da lista dos clientes pelo id', (url) => {
   cy.request({
      method: 'GET',
      form: false,
      url: `${baseUrl}${url}`,
      headers: {
         'Accept': '*/*',
         'Content-Type': 'application/json'
      },
      failOnStatusCode: false
   }).as('res')
})
And('validar o response body de busca de usuário pelo id', () => {
   cy.get('@res').then((response) => {
      //@ts-ignore
      expect(response.body).to.be.a('object')
      //@ts-ignore
      expect(response.body.birth_date).to.be.a('string')
      //@ts-ignore
      expect(response.body.cpf).to.be.a('string')
      //@ts-ignore
      expect(response.body.email).to.be.a('string')
      //@ts-ignore
      expect(response.body.id).to.be.a('number')
      //@ts-ignore
      expect(response.body.name).to.be.a('string')
      //@ts-ignore
      expect(response.body.zip_code).to.be.a('string')
   })
})

//Exclusão de clientes (Fluxos de sucesso) - 5
Given('que o usuário se cadastrou na Herupu',()=>{
   cy.request({
      method: 'POST',
      form: false,
      url: `${baseUrl}/Client/create`,
      body: {
         "name": "Bruno Matheus Stefano Leite",
         "email":"brunolechon2008@gmmai.com",
         "birth_date": "1996-02-02T04:06:29.63",
         "cpf": "46966151890",
         "zip_code": "123"
      },
      headers: {
         'Accept': '*/*',
         'Content-Type': 'application/json'
      },
      failOnStatusCode: false
   }).as('res').then((response) => {
      _id = response.body.id
   })
})
When('realizar a requisição da URL {string} para excluir o usuário pelo id', (url) => {
   cy.request({
      method: 'DELETE',
      form: false,
      url: `${baseUrl}${url}`+_id,
      headers: {
         'Accept': '*/*',
         'Content-Type': 'application/json'
      },
      failOnStatusCode: false
   }).as('res')
})