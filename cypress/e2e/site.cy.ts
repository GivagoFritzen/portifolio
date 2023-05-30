describe('Test all site', () => {
  /*
  it('Change language', () => {
    cy.visit('http://localhost:4200/')
    cy.get('select[name="language"]').select("Português");
    cy.get('header').contains('Quem é');

    cy.get('select[name="language"]').select("English");
    cy.get('header').contains('Who');
  })

  it('Check EffectType', () => {
    cy.visit('http://localhost:4200/')
  })

  it('Go Skills and load more info', () => {
    const skillsVisibles = 6;
    const allSkills = 7;

    cy.visit('http://localhost:4200/')
    cy.contains('Skills').click();
    cy.get('.skills').find('li:not(.hidden)').its('length').should('eq', skillsVisibles);
    cy.wait(2000);
    cy.get('.accordion').click();
    cy.get('.skills').find('li:not(.hidden)').its('length').should('eq', allSkills);
    cy.get('.accordion').click();
    cy.get('.skills').find('li:not(.hidden)').its('length').should('eq', skillsVisibles);
  })

  it('Go footer and click button linkedin a href', () => {
    cy.visit('http://localhost:4200/')
    cy.contains('Footer').click();

    cy.get('#button-linkedin').should('have.attr', 'target', '_blank');
    cy.get('#button-linkedin')
      .invoke('attr', 'href')
      .then(href => {
        expect(href).to.equal('https://www.linkedin.com/in/givago-fritzen-7b9729aa/');
      });
  })

  it('Go footer and click button github a href', () => {
    cy.visit('http://localhost:4200/')
    cy.contains('Footer').click();

    cy.get('#button-github').should('have.attr', 'target', '_blank');
    cy.get('#button-github')
      .invoke('attr', 'href')
      .then(href => {
        expect(href).to.equal('https://github.com/GivagoFritzen/');
      });
  })

  it('Go footer and make konami code', () => {
    cy.visit('http://localhost:4200/')
    cy.contains('Footer').click();

    cy.get('.crossTop').click();
    cy.get('.crossTop').click();

    cy.get('.crossBottom').click();
    cy.get('.crossBottom').click();

    cy.get('.crossLeft').click();
    cy.get('.crossRight').click();

    cy.get('.crossLeft').click();
    cy.get('.crossRight').click();

    cy.get('#button-b').click();
    cy.get('#button-a').click();

    cy.contains('Start').click();

    cy.url().should('contain', '/secret');
  })
  */

  it('Go footer and make konami code', () => {
    cy.visit('http://localhost:4200/')
    cy.contains('Games').click();
  })
})