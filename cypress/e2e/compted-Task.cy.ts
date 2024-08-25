describe('Completed Task Test', () => {
    beforeEach(() => {
      // Visiter la page principale où le composant est affiché
      cy.visit('http://localhost:4200'); // Assurez-vous que le chemin correspond à votre route
    });
  
    it('should complete a task and move it to the completed tasks section', () => {
      // Attendre pour s'assurer que le DOM est complètement chargé
      cy.wait(2000); // Réduisez ce délai si possible
  
      
      // Attendre avant de cliquer sur la checkbox
      cy.wait(10000); // Attendre 2 secondes avant de cliquer sur la checkbox
  
      // Assurez-vous que la checkbox est visible et cliquable
      cy.get('input[type="checkbox"]').first().should('be.visible').click();
  
      // Attendre un moment pour permettre au DOM de se mettre à jour
      cy.wait(1000); // Réduire le délai pour un temps d'attente plus raisonnable
  
      // Vérifiez que la tâche a été retirée de la liste des tâches actives
      cy.get('table tbody tr').should('not.have.class', 'completed-task');
  
      // Vérifiez que la tâche a été ajoutée à la section des tâches complètes
      cy.get('table tbody tr.completed-task').should('have.length.greaterThan', 0);
    });
  });
  