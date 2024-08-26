describe('Add Task Modal', () => {
    beforeEach(() => {
      // Visiter la page principale où le composant est affiché
      cy.visit('http://localhost:4200'); 
  
      
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
  
      cy.get('input#Title').type('New Task Title');
    cy.get('textarea#Description').type('Description of the new task');
    cy.get('input#StartDate').type('2024-08-01'); 
    cy.get('input#Deadline').type('2024-08-10'); 
    
    // Sélectionner une priorité
    cy.get('select#Priority').select('High');
    
    // Soumettre le formulaire
    cy.get('button[type="submit"]').click();
  
    cy.get('table tbody tr').last().within(() => {
      cy.get('td').eq(2).should('contain', 'New Task Title');
      cy.get('td').eq(3).should('contain', 'Description of the new task');
      cy.get('td').eq(4).should('contain', '2024-08-01');
      cy.get('td').eq(5).should('contain', '2024-08-10');
      cy.get('td').eq(6).should('contain', 'High');
    });
  });
      
  
      
     
    });
  
  