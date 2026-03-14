const patrimonioMunicipalService = require('../services/patrimonioMunicipalService')

async function getReavalBaixasBens(req, res) {
    try {
        const data = await patrimonioMunicipalService.listarReavalBaixasBens(req.query)
        res.json(data)
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao consultar ajustes ou reavaliações de bens', detalhe: error.response?.data || error.message })
    }
}

async function getUnidadeOrcamentariaBens(req, res) {
    try {
        const data = await patrimonioMunicipalService.listarUnidadeOrcamentariaBens(req.query)
        res.json(data)
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao consultar bens por unidade orçamentária', detalhe: error.response?.data || error.message })
    }
}

async function getBensMunicipios(req, res) {
    try {
        const data = await patrimonioMunicipalService.listarBensMunicipios(req.query)
        res.json(data)
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao consultar bens do município', detalhe: error.response?.data || error.message })
    }
}

async function getEmpenhosBens(req, res) {
    try {
        const data = await patrimonioMunicipalService.listarEmpenhosBens(req.query)
        res.json(data)
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao consultar empenhos de bens', detalhe: error.response?.data || error.message })
    }
}

module.exports = {
    getReavalBaixasBens,
    getUnidadeOrcamentariaBens,
    getBensMunicipios,
    getEmpenhosBens
}
