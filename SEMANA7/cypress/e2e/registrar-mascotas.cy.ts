describe('Registrar Mascota', () => {

  it('debería permitir llenar los campos requeridos y presionar guardar', () => {
    cy.visit('http://localhost:8100/registrar-mascotas');

    // Nombre
    cy.get('ion-input[placeholder="Nombre"] input').type('Luna');

    // Tipo
    cy.get('ion-select[placeholder="Tipo"]').click({ force: true });
    cy.get('ion-alert button').contains('Perro').click({ force: true });
    cy.get('ion-alert button').contains('OK').click({ force: true });

    // Color
    cy.get('ion-input[placeholder="Color"] input').type('Negro');

    // Peso
    cy.get('ion-input[placeholder="Peso"] input').type('10.5');

    // Altura
    cy.get('ion-input[placeholder="Altura"] input').type('45');

    // Guardar
    cy.get('ion-button').contains('Guardar').click({ force: true });
  });

  it('no debería guardar si el nombre está vacío', () => {
    cy.visit('http://localhost:8100/registrar-mascotas');

    // Tipo
    cy.get('ion-select[placeholder="Tipo"]').click({ force: true });
    cy.get('ion-alert button').contains('Perro').click({ force: true });
    cy.get('ion-alert button').contains('OK').click({ force: true });

    // Peso
    cy.get('ion-input[placeholder="Peso"] input').type('12');

    // Altura
    cy.get('ion-input[placeholder="Altura"] input').type('40');

    // Guardar
    cy.get('ion-button').contains('Guardar').click({ force: true });

    // Asegura que no se redirige
    cy.url().should('include', '/registrar-mascotas');
  });

  it('no debería guardar si no se elige el tipo de mascota', () => {
    cy.visit('http://localhost:8100/registrar-mascotas');

    // Nombre
    cy.get('ion-input[placeholder="Nombre"] input').type('Firulais');

    // Peso
    cy.get('ion-input[placeholder="Peso"] input').type('15');

    // Altura
    cy.get('ion-input[placeholder="Altura"] input').type('50');

    // Guardar
    cy.get('ion-button').contains('Guardar').click({ force: true });

    // Asegura que no se redirige
    cy.url().should('include', '/registrar-mascotas');
  });

});
