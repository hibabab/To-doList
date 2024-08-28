describe('Edit/Add Task Modal', () => {
  beforeEach(() => {
    // Visit the main page where the component is displayed
    cy.visit('http://localhost:4200'); // Ensure this URL matches your test environment

    // Ensure there are no tasks at the start of the test for simplicity
    cy.get('table tbody').then($tbody => {
      if ($tbody.find('tr').length > 0) {
        cy.get('button').contains('Delete').click(); // Assume there is a delete button to clean up existing tasks
      }
    });
  });

  it('should open the modal, fill out the form, and add a task', () => {
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
    
    // Verify that the task is added to the table
    cy.get('table tbody tr').last().within(() => {
      cy.get('td').eq(1).should('contain', 'New Task Title');
      cy.get('td').eq(2).should('contain', 'Description of the new task');
      cy.get('td').eq(3).should('contain', '2024-08-01');
      cy.get('td').eq(4).should('contain', '2024-08-10');
      cy.get('td').eq(5).should('contain', 'High');
    });
  });

  it('should open the modal with existing task data and update the task', () => {
    // Add a task to be able to edit it
    cy.get('button').contains('Add Task').click();
    cy.get('input#Title').type('Task to Update');
    cy.get('textarea#Description').type('Description of the task to update');
    cy.get('input#StartDate').type('2024-08-01');
    cy.get('input#Deadline').type('2024-08-10');
    cy.get('select#Priority').select('Medium');
    cy.get('button').contains('Submit').click();

    // Open the modal to edit the task
    cy.get('table tbody tr').first().find('button.uppdate').click();
    
    // Edit the task details
    cy.get('input#Title').clear().type('Updated Task Title');
    cy.get('textarea#Description').clear().type('Updated description');
    cy.get('select#Priority').select('High');
    cy.get('button').contains('Submit').click();
    
    // Verify that the task details have been updated
    cy.get('table tbody tr').first().within(() => {
      cy.get('td').eq(1).should('contain', 'Updated Task Title');
      cy.get('td').eq(2).should('contain', 'Updated description');
      cy.get('td').eq(5).should('contain', 'High');
    });
  });
});
