const pessoalFolhaService = require('../services/pessoalFolhaService')

async function getItensRemuneratorios(req, res) {
    try {
        const data = await pessoalFolhaService.listarItensRemuneratorios(req.query)
        res.json(data)
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao consultar itens remuneratórios', detalhe: error.response?.data || error.message })
    }
}

async function getDesligamentos(req, res) {
    try {
        const data = await pessoalFolhaService.listarDesligamentos(req.query)
        res.json(data)
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao consultar desligamentos', detalhe: error.response?.data || error.message })
    }
}

async function getAgentesPublicos(req, res) {
    try {
        const data = await pessoalFolhaService.listarAgentesPublicos(req.query)
        res.json(data)
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao consultar agentes públicos', detalhe: error.response?.data || error.message })
    }
}

module.exports = {
    getItensRemuneratorios,
    getDesligamentos,
    getAgentesPublicos
}
