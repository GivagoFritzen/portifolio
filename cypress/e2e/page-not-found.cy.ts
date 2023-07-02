describe('Test page not found', () => {
  it('Redirect page 404', () => {
    cy.visit('http://localhost:4200/page-not-found');

    cy.url().then((url) => {
      expect(url).to.include('http://localhost:4200/404');
    });
  })

  it('Check movement', () => {
    cy.visit('http://localhost:4200/page-not-found');

    const firstNumber = cy.get('#first-number');
    let firstStyle: string | undefined = '';

    firstNumber.then(($elemento) => {
      firstStyle = $elemento.attr('style');
    });

    cy.wait(2000);

    firstNumber.then(($elemento) => {
      expect($elemento.attr('style')).not.to.equal(firstStyle);
    });
  })

  it('Random Text after reload', () => {
    cy.visit('http://localhost:4200/page-not-found');
    cy.get('#space-text').wait(500).then(($div) => {
      expect(checkRandomSpaceText($div.text()!)).to.be.true;
    });
  })

  const limitAttempts = 6;
  function checkRandomSpaceText(oldText: string | undefined, attempts = 0): boolean {
    cy.reload();

    cy.get('#space-text').wait(500).then(($div) => {
      const currentText = $div.text();
      if (currentText === oldText && attempts < limitAttempts) {
        attempts += 1;
        return checkRandomSpaceText(currentText, attempts);
      }
      else if (currentText === oldText && attempts >= limitAttempts) {
        return false;
      }
    });

    return true;
  }
})