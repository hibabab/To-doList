describe('Task Completion Tests', () => {
    beforeEach(() => {
      // Visit the main page where the component is displayed
      cy.visit('http://localhost:4200'); 
  
      
      cy.get('button').contains('Add Task').click();
      cy.get('input#Title').type('Sample Task');
      cy.get('textarea#Description').type('This is a sample task');
      cy.get('input#StartDate').type('2024-08-01');
      cy.get('input#Deadline').type('2024-08-10');
      cy.get('select#Priority').select('Medium');
      cy.get('button').contains('Submit').click();
    });
  
    it('should toggle a task to completed and update the completion date', () => {
      // Find the first task and verify it's not marked as completed
      cy.get('table tbody tr').first().within(() => {
        cy.get('input[type="checkbox"]').should('not.be.checked');
      });
  
      // Check the checkbox to mark the task as completed
      cy.get('table tbody tr').first().within(() => {
        cy.get('input[type="checkbox"]').check();
      });
  
      // Verify that the task is now marked as completed
      cy.get('table tbody tr').first().within(() => {
        cy.get('input[type="checkbox"]').should('be.checked');
        cy.get('td').eq(5).should('not.be.empty'); // Ensure the completion date is filled in
      });
  
      
    });
  
    it('should mark a completed task as not completed', () => {
      // Mark the first task as completed
      cy.get('table tbody tr').first().within(() => {
        cy.get('input[type="checkbox"]').check();
      });
  
      // Verify that the task is marked as completed
      cy.get('table tbody tr').first().within(() => {
        cy.get('input[type="checkbox"]').should('be.checked');
      });
  
      // Uncheck the checkbox to mark the task as not completed
      cy.get('table tbody tr').first().within(() => {
        cy.get('input[type="checkbox"]').uncheck();
      });
  
      // Verify that the task is now marked as not completed
      cy.get('table tbody tr').first().within(() => {
        cy.get('input[type="checkbox"]').should('not.be.checked');
      });
  
      
    });
  });
  