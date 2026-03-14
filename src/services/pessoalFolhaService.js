const httpClient = require('../utils/httpClient')

async function listarItensRemuneratorios(params) {
    const response = await httpClient.get('/itens_remuneratorios', { params })
    return response.data
}

async function listarDesligamentos(params) {
    const response = await httpClient.get('/desligamentos', { params })
    return response.data
}

async function listarAgentesPublicos(params) {
    const response = await httpClient.get('/agentes_publicos', { params })
    return response.data
}

module.exports = {
    listarItensRemuneratorios,
    listarDesligamentos,
    listarAgentesPublicos
}
