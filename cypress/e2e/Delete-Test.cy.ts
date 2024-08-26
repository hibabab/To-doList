describe('Task Management Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');

    // Attendre que le tableau soit visible
    cy.get('table').should('be.visible');

    // Vérifiez si le tableau est vide, et ajoutez une tâche si nécessaire
    cy.get('table tbody').then($tbody => {
      if ($tbody.find('tr').length === 0) {
        cy.get('button').contains('Add Task').click();
        cy.get('input#Title').type('Task to Delete');
        cy.get('textarea#Description').type('Description for deletion');
        cy.get('input#StartDate').type('2024-08-01');
        cy.get('input#Deadline').type('2024-08-10');
        cy.get('select#Priority').select('Medium');
        cy.get('button[type="submit"]').click();

        // Attendre que la tâche soit ajoutée
        cy.get('table tbody tr').should('have.length', 1);
      }
    });
  });
  
  it('should delete a task', () => {
    // Assurer qu'il y a au moins une tâche avant de tenter de la supprimer
    cy.get('table tbody tr').should('have.length.greaterThan', 0);

    // Cliquer sur le bouton de suppression de la première tâche
    cy.get('table tbody tr').first().find('button').click();
    
    // Intercepter l'alerte SweetAlert pour confirmer la suppression
    describe('Task Management Tests', () => {
      beforeEach(() => {
        cy.visit('http://localhost:4200');
    
        // Attendre que le tableau soit visible
        cy.get('table').should('be.visible');
    
        // Vérifiez si le tableau est vide, et ajoutez une tâche si nécessaire
        cy.get('table tbody').then($tbody => {
          if ($tbody.find('tr').length === 0) {
            cy.get('button').contains('Add Task').click();
            cy.get('input#Title').type('Task to Delete');
            cy.get('textarea#Description').type('Description for deletion');
            cy.get('input#StartDate').type('2024-08-01');
            cy.get('input#Deadline').type('2024-08-10');
            cy.get('select#Priority').select('Medium');
            cy.get('button[type="submit"]').click();
    
            // Attendre que la tâche soit ajoutée
            cy.get('table tbody tr').should('have.length', 1);
          }
        });
      });
      
      it('should delete a task when confirmed', () => {
        // Assurer qu'il y a au moins une tâche avant de tenter de la supprimer
        cy.get('table tbody tr').should('have.length.greaterThan', 0);
    
        // Cliquer sur le bouton de suppression de la première tâche
        cy.get('table tbody tr').first().find('button').contains('Delete').click();
        
        // Intercepter l'alerte SweetAlert pour confirmer la suppression
        cy.on('window:confirm', (text) => {
          expect(text).to.contains('Do you want to delete this task permanently?');
          return true; // Confirme la suppression
        });
    
        // Attendre un peu après la suppression pour que les modifications prennent effet
        cy.wait(1000); // Attendre 1 seconde pour laisser le temps à la suppression d'être prise en compte
        
        // Vérifier que la tâche a été supprimée du tableau
        cy.get('table tbody tr').should('have.length', 0);
      });
    
      it('should not delete a task when cancelled', () => {
        // Assurer qu'il y a au moins une tâche avant de tenter de la supprimer
        cy.get('table tbody tr').should('have.length.greaterThan', 0);
        
        // Obtenir le nombre initial de tâches
        cy.get('table tbody tr').its('length').as('initialLength');
        
        // Cliquer sur le bouton de suppression de la première tâche
        cy.get('table tbody tr').first().find('button').contains('Delete').click();
        
        // Intercepter l'alerte SweetAlert pour annuler la suppression
        cy.on('window:confirm', (text) => {
          expect(text).to.contains('Do you want to delete this task permanently?');
          return false; // Annule la suppression
        });
    
        
        cy.wait(1000); 
        
        // Vérifier que la taille du tableau est inchangée
        cy.get('table tbody tr').should('have.length', Cypress.$('@initialLength'));
      });
    });
    
  });
});
