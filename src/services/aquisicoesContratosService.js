const httpClient = require('../utils/httpClient')

async function listarPublicacoesEditaisLicitacoes(params) {
    const response = await httpClient.get('/publicacoes_editais_licitacoes', { params })
    return response.data
}

async function listarContratados(params) {
    const response = await httpClient.get('/contratados', { params })
    return response.data
}

async function listarItensLicitacoes(params) {
    const response = await httpClient.get('/itens_licitacoes', { params })
    return response.data
}

async function listarLicitacoes(params) {
    const response = await httpClient.get('/licitacoes', { params })
    return response.data
}

async function listarLicitantes(params) {
    const response = await httpClient.get('/licitantes', { params })
    return response.data
}

async function listarComissoesLicitacoes(params) {
    const response = await httpClient.get('/comissoes-licitacoes', { params }) // Note: The image shows /comissoes-licitacoes with hyphen.
    return response.data
}

async function listarDotacoesLicitacoes(params) {
    const response = await httpClient.get('/dotacoes_licitacoes', { params })
    return response.data
}

async function listarContrato(params) {
    const response = await httpClient.get('/contrato', { params })
    return response.data
}

module.exports = {
    listarPublicacoesEditaisLicitacoes,
    listarContratados,
    listarItensLicitacoes,
    listarLicitacoes,
    listarLicitantes,
    listarComissoesLicitacoes,
    listarDotacoesLicitacoes,
    listarContrato
}
