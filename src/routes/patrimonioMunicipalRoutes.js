const express = require('express')
const router = express.Router()

const controller = require('../controllers/patrimonioMunicipalController')

router.get('/reaval-baixas-bens', controller.getReavalBaixasBens)
router.get('/unidade-orcamentaria-bens', controller.getUnidadeOrcamentariaBens)
router.get('/bens-municipios', controller.getBensMunicipios)
router.get('/empenhos-bens', controller.getEmpenhosBens)

module.exports = router
