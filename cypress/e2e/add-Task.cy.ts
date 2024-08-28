describe('Add Task Modal', () => {
  beforeEach(() => {
    // Visit the main page where the component is displayed
    cy.visit('http://localhost:4200');
  });

  it('', () => {
    // Open the modal
    cy.get('button').contains('Add Task').click();
    
    
    
  
    // Fill out the form in the modal
    cy.get('input#Title').type('New Task Title');
    cy.get('textarea#Description').type('Description of the new task');
    cy.get('input#StartDate').type('2024-08-01');
    cy.get('input#Deadline').type('2024-08-10');
    
    // Select a priority
    cy.get('select#Priority').select('High');
    
    // Submit the form
    cy.get('button').contains('Submit').click();
  
    // Verify the task is added to the table
    cy.get('table tbody tr').should('have.length.greaterThan', 0); // Ensure at least one row exists
    cy.get('table tbody tr').last().within(() => {
      cy.get('td').eq(1).should('contain', 'New Task Title');
      cy.get('td').eq(2).should('contain', 'Description of the new task');
      cy.get('td').eq(3).should('contain', '2024-08-01');
      cy.get('td').eq(4).should('contain', '2024-08-10');
      cy.get('td').eq(5).should('contain', 'High');
    });
  });
});
