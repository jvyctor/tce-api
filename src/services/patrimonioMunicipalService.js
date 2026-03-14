const httpClient = require('../utils/httpClient')

async function listarReavalBaixasBens(params) {
    const response = await httpClient.get('/reaval_baixas_bens', { params })
    return response.data
}

async function listarUnidadeOrcamentariaBens(params) {
    const response = await httpClient.get('/unidade_orcamentaria_bens', { params })
    return response.data
}

async function listarBensMunicipios(params) {
    const response = await httpClient.get('/bens_municipios', { params })
    return response.data
}

async function listarEmpenhosBens(params) {
    const response = await httpClient.get('/empenhos_bens', { params })
    return response.data
}

module.exports = {
    listarReavalBaixasBens,
    listarUnidadeOrcamentariaBens,
    listarBensMunicipios,
    listarEmpenhosBens
}
