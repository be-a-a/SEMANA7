describe('Página de Home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8100/home');
  });

  it('debería cargar correctamente la página de home', () => {
    cy.contains('Bienvenido').should('exist');
  });

  it('debería mostrar todos los botones principales', () => {
    cy.contains('Registrar Mascota').should('exist');
    cy.contains('Ver Agenda').should('exist');
    cy.contains('¿Qué raza es mi mascota?').should('exist');
    cy.contains('Tomar Foto').should('exist');
    cy.contains('Ubicación').should('exist');
    cy.contains('Cerrar sesión').should('exist');
  });

  it('debería navegar a registrar-mascotas al hacer clic', () => {
    cy.contains('Registrar Mascota').click();
    cy.url().should('include', '/registrar-mascotas');
  });

  it('debería navegar a info-razas al hacer clic', () => {
    cy.visit('http://localhost:8100/home'); // Repetir para evitar navegación previa
    cy.contains('¿Qué raza es mi mascota?').click();
    cy.url().should('include', '/info-razas');
  });

  it('debería cerrar sesión y redirigir al login', () => {
    cy.visit('http://localhost:8100/home');
    cy.contains('Cerrar sesión').click();
    cy.url().should('include', '/login');
  });
});
