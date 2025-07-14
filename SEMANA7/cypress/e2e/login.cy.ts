describe('Página de Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8100/login');
  });

  it('debería cargar correctamente la página de login', () => {
    cy.contains('Iniciar Sesión').should('exist');
  });

  it('debería mostrar los campos de usuario y contraseña', () => {
    cy.get('ion-input').eq(0).should('exist'); // Usuario
    cy.get('ion-input[type="password"]').should('exist'); // Contraseña
  });

  it('debería permitir escribir usuario y contraseña', () => {
    cy.get('ion-input').eq(0).type('usuario1');
    cy.get('ion-input[type="password"]').type('password123');
  });

  it('debería permitir hacer clic en el botón Entrar', () => {
    cy.contains('Entrar').click();
  });
});
