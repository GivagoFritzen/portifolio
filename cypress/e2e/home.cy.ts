describe('Test home', () => {
  it('Change language', () => {
    cy.visit('http://localhost:4200/');
    cy.get('select[name="language"]').select("Português");
    cy.get('header').contains('Quem é');

    cy.get('select[name="language"]').select("English");
    cy.get('header').contains('Who');
  })

  it('Check EffectType', () => {
    cy.visit('http://localhost:4200/')

    const expected = 'Developer who loves coding';

    cy.wait(1000);

    cy.get('.content #text').then(($div) => {
      expect(expected).to.include($div.text());
    });
  })

  it('Go Skills and load more info', () => {
    const skillsVisibles = 6;
    const allSkills = 7;

    cy.visit('http://localhost:4200/');
    cy.contains('Skills').click();
    cy.get('.skills').find('li:not(.hidden)').its('length').should('eq', skillsVisibles);
    cy.wait(2000);
    cy.get('.accordion').click();
    cy.get('.skills').find('li:not(.hidden)').its('length').should('eq', allSkills);
    cy.get('.accordion').click();
    cy.get('.skills').find('li:not(.hidden)').its('length').should('eq', skillsVisibles);
  })

  it('Go footer and click button linkedin a href', () => {
    cy.visit('http://localhost:4200/');
    cy.contains('Footer').click();

    cy.get('#button-linkedin').should('have.attr', 'target', '_blank');
    cy.get('#button-linkedin')
      .invoke('attr', 'href')
      .then(href => {
        expect(href).to.equal('https://www.linkedin.com/in/givago-fritzen-7b9729aa/');
      });
  })

  it('Go footer and click button github a href', () => {
    cy.visit('http://localhost:4200/');
    cy.contains('Footer').click();

    cy.get('#button-github').should('have.attr', 'target', '_blank');
    cy.get('#button-github')
      .invoke('attr', 'href')
      .then(href => {
        expect(href).to.equal('https://github.com/GivagoFritzen/');
      });
  })

  it('Go footer and make konami code', () => {
    cy.visit('http://localhost:4200/');
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

  it('Go games and open modal games', () => {
    cy.visit('http://localhost:4200/');
    cy.contains('Games').click();

    cy.get('.carousel-dots span').eq(2).click();
    cy.get('.game-2 >button').click();

    cy.get('.modal-buttons >a')
      .invoke('attr', 'href')
      .then(href => {
        expect(href).to.equal('https://givagofritzen.itch.io/trash');
      });

    cy.get('#closeModalButton').click();

    cy.get('.modal').should('not.exist');
  })
})