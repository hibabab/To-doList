describe('Add Task Modal', () => {
    beforeEach(() => {
      // Visiter la page principale où le composant est affiché
      cy.visit('http://localhost:4200'); // Assurez-vous que le chemin correspond à votre route
  
      // Réinitialiser le local storage avant chaque test si nécessaire
      cy.clearLocalStorage();
    });
  
    it('should open modal when "Add Task" button is clicked', () => {
      // Vérifiez que le modal est initialement caché
      cy.get('div[role="dialog"]').should('not.exist');
  
      // Cliquez sur le bouton pour ouvrir le modal
      cy.get('button').contains('Add Task').click();
  
      // Vérifiez que le modal est affiché
      cy.get('div[role="dialog"]').should('be.visible');
    });
  
    it('should fill out and submit the form in the modal', () => {
      // Ouvrir le modal
      cy.get('button').contains('Add Task').click();
  
      // Remplir le formulaire
      cy.get('input#Title').type('New Task Title');
      cy.get('textarea#Description').type('Description of the new task');
      cy.get('input#StartDate').type('2024-08-01'); // Assurez-vous que la date est valide
      cy.get('input#Deadline').type('2024-08-10'); // Assurez-vous que la date est valide
  
      // Sélectionner une priorité
      cy.get('select#Priority').select('High');
  
      // Soumettre le formulaire
      cy.get('button[type="submit"]').click();
  
      // Vérifiez que la tâche a été ajoutée
      // Vous pouvez vérifier les éléments du tableau ou les données dans le local storage ici si nécessaire
  
      
     
    });
  });
  