var axios = require('axios')

var httpCallMethod = function () {

    this.makecall = async function () {

        let xmls = '<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="http://www.oorsprong.org/websamples.countryinfo"><SOAP-ENV:Body> <ns1:CapitalCity>   <ns1:sCountryISOCode>IN</ns1:sCountryISOCode></ns1:CapitalCity> </SOAP-ENV:Body></SOAP-ENV:Envelope>'


        console.log("making call")
        const response = await axios.post('http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL',
            xmls, {
                headers:
                {
                    'Content-Type': 'text/xml',
                    SOAPAction: ''
                }
            })
        return response
    }
}

module.exports = new httpCallMethod();