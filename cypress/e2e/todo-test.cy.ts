describe('Task List Display', () => {
  beforeEach(() => {
    
    cy.visit('http://localhost:4200');
  });

  it('should display the task table with correct headers', () => {
    // Vérifier que les en-têtes du tableau sont présents
    cy.get('thead').first().within(() => {
      cy.contains('th', '#').should('exist');
      cy.contains('th', 'Completed').should('exist');
      cy.contains('th', 'Title').should('exist');
      cy.contains('th', 'Description').should('exist');
      cy.contains('th', 'Start Date').should('exist');
      cy.contains('th', 'Deadline').should('exist');
      cy.contains('th', 'CompletionDate').should('exist');
      cy.contains('th', 'Priority').should('exist');
      cy.contains('th', 'Action').should('exist');
    });
  });
});
