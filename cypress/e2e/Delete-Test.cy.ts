//avant exucuter le test il faut clicquer sur add task pour remplir tableau 
it('should delete a task', () => {
  // Visiter la page de l'application
  cy.visit('http://localhost:4200');

  // Attendre que le tableau et les lignes de tâches soient visibles
  cy.get('table tbody tr', { timeout: 40000 }).should('have.length.greaterThan', 0);

  // Cliquer sur le bouton de suppression de la première tâche
  cy.get('table tbody tr').first().find('button').click();

  // Intercepter l'alerte SweetAlert pour confirmer la suppression
  cy.on('window:confirm', (text) => {
    expect(text).to.contains('Do you want to delete this task permanently?');
    return true; // Confirme la suppression
  });

  // Vérifier que la tâche a été supprimée du tableau
  cy.get('table tbody tr').should('have.length.lessThan', 1);
});
