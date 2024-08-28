describe('Task delete Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  
    // Wait for the table to be visible
    cy.get('table').should('be.visible');
  
    // Check if the table is empty and add a task if needed
    cy.get('table tbody').then($tbody => {
      if ($tbody.find('tr').length === 0) {
        cy.get('button').contains('Add Task').click();
        cy.get('input#Title').type('Task to Delete');
        cy.get('textarea#Description').type('Description for deletion');
        cy.get('input#StartDate').type('2024-08-01');
        cy.get('input#Deadline').type('2024-08-10');
        cy.get('select#Priority').select('Medium');
        cy.get('button').contains('Submit').click();
  
        // Wait for the task to be added
        cy.get('table tbody tr').should('have.length', 1);
      }
    });
  });
  
  it('should delete a task when confirmed', () => {
    // Ensure there is at least one task before attempting to delete
    cy.get('table tbody tr').should('have.length.greaterThan', 0);
  
    // Stub window.confirm to return true for confirmation
    cy.window().then(win => {
      cy.stub(win, 'confirm').returns(true);
    });

    // Click the delete button of the first task
    cy.get('table tbody tr').first().find('button.delete').click();
    
    // Verify that the task has been removed from the table
    cy.get('table tbody tr').should('have.length', 0);
  });
  
  it('should not delete a task when canceled', () => {
    // Ensure there is at least one task before attempting to delete
    cy.get('table tbody tr').should('have.length.greaterThan', 0);
  
    // Stub window.confirm to return false for cancellation
    cy.window().then(win => {
      cy.stub(win, 'confirm').returns(false);
    });

    // Click the delete button of the first task
    cy.get('table tbody tr').first().find('button.delete').click();
    
    // Verify that the task is still in the table
    cy.get('table tbody tr').should('have.length.greaterThan', 0);
  });
});
