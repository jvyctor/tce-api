const tceService = require('../services/informacoesBasicasService')

async function getMunicipios(req, res) {
    try {
        const data = await tceService.listarMunicipios(req.query)
        res.json(data)
    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao consultar municípios',
            detalhe: error.response?.data || error.message
        })
    }
}

async function getUnidadesGestoras(req, res) {
    try {
        const data = await tceService.listarUnidadesGestoras(req.query)
        res.json(data)
    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao consultar unidades gestoras',
            detalhe: error.response?.data || error.message
        })
    }
}

async function getFuncoes(req, res) {
    try {
        const data = await tceService.listarFuncoes(req.query)
        res.json(data)
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao consultar funções', detalhe: error.response?.data || error.message })
    }
}

async function getGestoresUnidadesGestoras(req, res) {
    try {
        const data = await tceService.listarGestoresUnidadesGestoras(req.query)
        res.json(data)
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao consultar gestores das unidades gestoras', detalhe: error.response?.data || error.message })
    }
}

async function getUnidadesFederacao(req, res) {
    try {
        const data = await tceService.listarUnidadesFederacao(req.query)
        res.json(data)
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao consultar unidades da federação', detalhe: error.response?.data || error.message })
    }
}

async function getContasBancarias(req, res) {
    try {
        const data = await tceService.listarContasBancarias(req.query)
        res.json(data)
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao consultar contas bancárias', detalhe: error.response?.data || error.message })
    }
}

async function getOrgaos(req, res) {
    try {
        const data = await tceService.listarOrgaos(req.query)
        res.json(data)
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao consultar órgãos', detalhe: error.response?.data || error.message })
    }
}

async function getUnidadesOrcamentarias(req, res) {
    try {
        const data = await tceService.listarUnidadesOrcamentarias(req.query)
        res.json(data)
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao consultar unidades orçamentárias', detalhe: error.response?.data || error.message })
    }
}

async function getTiposUnidadesAdministrativas(req, res) {
    try {
        const data = await tceService.listarTiposUnidadesAdministrativas(req.query)
        res.json(data)
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao consultar tipos de unidades administrativas', detalhe: error.response?.data || error.message })
    }
}

async function getOrdenadores(req, res) {
    try {
        const data = await tceService.listarOrdenadores(req.query)
        res.json(data)
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao consultar ordenadores', detalhe: error.response?.data || error.message })
    }
}

async function getContasExtraOrcamentarias(req, res) {
    try {
        const data = await tceService.listarContasExtraOrcamentarias(req.query)
        res.json(data)
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao consultar contas extra-orçamentárias', detalhe: error.response?.data || error.message })
    }
}

async function getGestoresUnidadesOrcamentarias2007(req, res) {
    try {
        const data = await tceService.listarGestoresUnidadesOrcamentarias2007(req.query)
        res.json(data)
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao consultar gestores (2007)', detalhe: error.response?.data || error.message })
    }
}

async function getSituacaoRemessa(req, res) {
    try {
        const data = await tceService.listarSituacaoRemessa(req.query)
        res.json(data)
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao consultar situação remessa', detalhe: error.response?.data || error.message })
    }
}

module.exports = {
    getMunicipios,
    getUnidadesGestoras,
    getFuncoes,
    getGestoresUnidadesGestoras,
    getUnidadesFederacao,
    getContasBancarias,
    getOrgaos,
    getUnidadesOrcamentarias,
    getTiposUnidadesAdministrativas,
    getOrdenadores,
    getContasExtraOrcamentarias,
    getGestoresUnidadesOrcamentarias2007,
    getSituacaoRemessa
}