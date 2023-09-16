const xml2js = require('xml2js');
const parser = new xml2js.Parser({ explicitArray: false });

describe(`verify xml2js response`, () => {
  const xmlPayload = `<?xml version="1.0" encoding="UTF-8" ?>
    <pet>
      <id>0</id>
      <category>
        <id>0</id>
        <name>jagger</name>
      </category>
      <name>doggie</name>
      <photoUrls>string</photoUrls>
      <tags>
        <id>0</id>
        <name>panther</name>
      </tags>
      <status>available</status>
    </pet>`

  before('create new pet', () => {

    cy.request({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/pet',
      body: xmlPayload,
      headers: {
        'Content-Type': 'application/xml',
        'accept': 'application/xml'
      }
    }).then((res) => {
      expect(res.status).to.equal(200);
      parser.parseString(res.body, (err, result) => {
        petId = result.Pet.id;
      })
    })
  })

  it('Fetching pet data', () => {
    cy.request({
      method: 'GET',
      url: 'https://petstore.swagger.io/v2/pet' + petId,
      headers: {
        'accept': 'application/xml'
      }
    })
  }).then((res) => {
    expect(res.status).to.equal(200);
    parser.parseString(res.body, (err, result) => {
      expect(result.Pet.name).to.equal("jimmy");
      expect(result.Pet.id).to.equal(petId);
    })
  })
})