const aquisicoesContratosService = require('../services/aquisicoesContratosService')

async function getPublicacoesEditaisLicitacoes(req, res) {
    try {
        const data = await aquisicoesContratosService.listarPublicacoesEditaisLicitacoes(req.query)
        res.json(data)
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao consultar publicações de editais de licitações', detalhe: error.response?.data || error.message })
    }
}

async function getContratados(req, res) {
    try {
        const data = await aquisicoesContratosService.listarContratados(req.query)
        res.json(data)
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao consultar contratados', detalhe: error.response?.data || error.message })
    }
}

async function getItensLicitacoes(req, res) {
    try {
        const data = await aquisicoesContratosService.listarItensLicitacoes(req.query)
        res.json(data)
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao consultar itens de licitações', detalhe: error.response?.data || error.message })
    }
}

async function getLicitacoes(req, res) {
    try {
        const data = await aquisicoesContratosService.listarLicitacoes(req.query)
        res.json(data)
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao consultar licitações', detalhe: error.response?.data || error.message })
    }
}

async function getLicitantes(req, res) {
    try {
        const data = await aquisicoesContratosService.listarLicitantes(req.query)
        res.json(data)
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao consultar licitantes', detalhe: error.response?.data || error.message })
    }
}

async function getComissoesLicitacoes(req, res) {
    try {
        const data = await aquisicoesContratosService.listarComissoesLicitacoes(req.query)
        res.json(data)
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao consultar comissões de licitações', detalhe: error.response?.data || error.message })
    }
}

async function getDotacoesLicitacoes(req, res) {
    try {
        const data = await aquisicoesContratosService.listarDotacoesLicitacoes(req.query)
        res.json(data)
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao consultar dotações de licitações', detalhe: error.response?.data || error.message })
    }
}

async function getContrato(req, res) {
    try {
        const data = await aquisicoesContratosService.listarContrato(req.query)
        res.json(data)
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao consultar contrato', detalhe: error.response?.data || error.message })
    }
}

module.exports = {
    getPublicacoesEditaisLicitacoes,
    getContratados,
    getItensLicitacoes,
    getLicitacoes,
    getLicitantes,
    getComissoesLicitacoes,
    getDotacoesLicitacoes,
    getContrato
}
