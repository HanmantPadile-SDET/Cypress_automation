describe('Ecommerce v1 Product test', () => {
    const data = [
      [
        'resume-writing',
        `https://staging.topresume.com/resume-writing`,
        '[class*="package-title"]>a',
        3,
        'topresume',
      ],
      [
        'cv-writing',
        `https://staging.topcv.com/cv-writing`,
        '[class*="package-title"]>a',
        3,
        'topcv',
      ],
      [
        'interview-coaching-services',
        `https://staging.topinterview.com/interview-coaching-services`,
        'div[class*="centered"]>a',
        3,
        'topinterview',
      ],
      [
        'academic-cv',
        `https://staging.topresume.com/resume-writing/academic-cv`,
        '[href*="/purchase"]',
        5,
        'topresume',
      ],
      [
        'federal-resume',
        `https://staging.topresume.com/resume-writing/federal`,
        '[href*="/purchase"]',
        5,
        'topresume',
      ],
      [
        'military-resume',
        `https://staging.topresume.com/resume-writing/military#pricing`,
        '[href*="/purchase"]',
        4,
        'topresume',
      ],
      [
        'linkedin-profile-services',
        `https://staging.topresume.com/resume-writing/linkedin-profile-services`,
        '[href*="/purchase"]',
        5,
        'topresume',
      ],
    ]
  
    Cypress._.range(0, data.length).forEach((index) => {
      specify(
        `Should be able to validate ${data[index][0]} page for site - ${data[index][1]}`,
        () => {
          cy.visit(`${data[index][1]}`)
          cy.get(`${data[index][2]}`).should('have.length', data[index][3])
          cy.get(`${data[index][2]}`).each(($a) => {
            let url = `https://staging.${
              data[index][4]
            }.com${$a.attr('href')}`
            cy.visit(url)
            cy.get('p[id="cc_section"] label').should(
              'include.text',
              'Secured Checkout',
              { message: `failed to validate url - ${url}` }
            )
          })
        }
      )
    })
  })