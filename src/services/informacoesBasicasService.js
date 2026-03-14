const httpClient = require('../utils/httpClient')

async function listarMunicipios(params) {
    const response = await httpClient.get('/municipios', { params })
    return response.data
}

async function listarUnidadesGestoras(params) {
    const response = await httpClient.get('/unidades_gestoras', { params })
    return response.data
}

async function listarFuncoes(params) {
    const response = await httpClient.get('/funcoes', { params })
    return response.data
}

async function listarGestoresUnidadesGestoras(params) {
    const response = await httpClient.get('/gestores_unidades_gestoras', { params })
    return response.data
}

async function listarUnidadesFederacao(params) {
    const response = await httpClient.get('/unidades_federacao', { params })
    return response.data
}

async function listarContasBancarias(params) {
    const response = await httpClient.get('/contas_bancarias', { params })
    return response.data
}

async function listarOrgaos(params) {
    const response = await httpClient.get('/orgaos', { params })
    return response.data
}

async function listarUnidadesOrcamentarias(params) {
    const response = await httpClient.get('/unidades_orcamentarias', { params })
    return response.data
}

async function listarTiposUnidadesAdministrativas(params) {
    const response = await httpClient.get('/tipos_unidades_administrativas', { params })
    return response.data
}

async function listarOrdenadores(params) {
    const response = await httpClient.get('/ordenadores', { params })
    return response.data
}

async function listarContasExtraOrcamentarias(params) {
    const response = await httpClient.get('/contas_extra_orcamentarias', { params })
    return response.data
}

async function listarGestoresUnidadesOrcamentarias2007(params) {
    const response = await httpClient.get('/gestores_unidades_orcamentarias_2007', { params })
    return response.data
}

async function listarSituacaoRemessa(params) {
    const response = await httpClient.get('/situacao-remessa', { params })
    return response.data
}

module.exports = {
    listarMunicipios,
    listarUnidadesGestoras,
    listarFuncoes,
    listarGestoresUnidadesGestoras,
    listarUnidadesFederacao,
    listarContasBancarias,
    listarOrgaos,
    listarUnidadesOrcamentarias,
    listarTiposUnidadesAdministrativas,
    listarOrdenadores,
    listarContasExtraOrcamentarias,
    listarGestoresUnidadesOrcamentarias2007,
    listarSituacaoRemessa
}