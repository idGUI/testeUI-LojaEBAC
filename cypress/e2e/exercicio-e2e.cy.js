/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')
import produtosPage from '../support/page_objects/produtos.page';
import checkoutPage from '../support/page_objects/checkout.page';
var checkout = require('../fixtures/dadosCheckout.json')


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('minha-conta')  
        cy.fixture('perfil').then((dados) => {
            cy.login(dados.usuario, dados.senha)
        })
    });

    it('Realizando processo completo de compra. ', () => {
        produtosPage.buscarProduto('Ajax Full-Zip Sweatshirt')
        produtosPage.addProduto()
        cy.get('.woocommerce-message').should('exist')

        produtosPage.buscarProduto('Aether Gym Pant')
        produtosPage.addNovoProd('34', 'Brown', 7 )
        cy.get('.woocommerce-message').should('exist')
    
        produtosPage.srcAddProd('Aero Daily Fitness Tee', 'S', 'Yellow', 2)
        cy.get('.woocommerce-message').should('exist')
    
        cy.fixture('produto').then((dados) => {
            produtosPage.srcAddProd(dados.nomeProduto, dados.tamanho, dados.cor, dados.qtd)
        })
        cy.get('.woocommerce-message').should('exist')


        cy.fixture('dadosCheckout').then((checkout) => {
            checkoutPage.dadosCheckout(
                checkout.nome,
                checkout.sobrenome,
                checkout.empresa,
                checkout.pais,
                checkout.endereco,
                checkout.numero,
                checkout.cidade,
                checkout.estado,
                checkout.cep,
                checkout.telefone,
                checkout.email,
              )
        })
        cy.get('.woocommerce-order-overview', { timeout: 10000 }).should('exist')
    
    });

})
