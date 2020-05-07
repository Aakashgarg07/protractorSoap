
var makeApiCall = require('../specs/apicall')

var convert = require('xml-js');


describe('Angular App', () => {
    beforeEach(async () => {
    });

    it('should make a SOAP call ', async () => {
        const response = await makeApiCall.makecall()
        console.log("Response" + await response.data)
        var result = convert.xml2json(response.data)
        console.log("\nJSON \n" + result)
        console.log("\nCountry Capital \n" +
            JSON.parse(result).elements[0].elements[0].elements[0].elements[0].elements[0].text)
    });


});
