class checkout {
    dadosCheckout(nome, sobrenome, pais, endereco, numero, cidade, estado, cep, telefone, email){
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click()
        cy.get('.checkout-button').click()
        cy.get('#billing_first_name').clear().type("Guilherme")
        cy.get('#billing_last_name').clear().type("Cunha")
        cy.get('#select2-billing_country-container').click().type("Brasil").get('[aria-selected="true"]').click()
        cy.get('#billing_address_1').clear().type("Rua Comum")
        cy.get('#billing_address_2').clear().type("123")
        cy.get('#billing_city').clear().type("São Paulo")
        cy.get('#select2-billing_state-container').click().type("São Paulo").get('[aria-selected="true"]').click()
        cy.get('#billing_postcode').clear().type("01105-145")
        cy.get('#billing_phone').clear().type("11 912345678")
        cy.get('#billing_email').clear().type("gui.teste@teste.com")
        cy.get('#payment_method_cod').click()
        cy.get('#terms').click()
        cy.get('#place_order').click()
    }
}

export default new checkout