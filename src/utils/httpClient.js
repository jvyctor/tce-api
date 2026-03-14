const axios = require('axios')

const httpClient = axios.create({
    baseURL: 'https://api-dados-abertos.tce.ce.gov.br',
    timeout: 10000
})

module.exports = httpClient