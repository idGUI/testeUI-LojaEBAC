class Produto {

    buscarProduto(nomeProduto){
        cy.get('[class="tbay-search form-control input-sm"]').eq(1).type(nomeProduto)
        cy.get('.button-search').eq(1).click()

    }

    addProduto(){
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.single_add_to_cart_button').click()
    }

    addNovoProd(tamanho, cor, qtd){
        cy.get(`.button-variable-item-${tamanho}`).click()
        cy.get(`.button-variable-item-${cor}`).click()
        cy.get('.input-text').clear().type(qtd)
        cy.get('.single_add_to_cart_button').click()
    }

    srcAddProd(nomeProduto, tamanho, cor, qtd){ //concatenação de massas de dados
        cy.visit('produtos')
        cy.get('.products > .row').contains(nomeProduto).click()
        cy.get(`.button-variable-item-${tamanho}`).click()
        cy.get(`.button-variable-item-${cor}`).click()
        cy.get('.input-text').clear().type(qtd)
        cy.get('.single_add_to_cart_button').click()
    }

}

export default new Produto()