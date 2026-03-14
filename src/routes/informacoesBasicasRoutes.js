const express = require('express')
const router = express.Router()

const controller = require('../controllers/informacoesBasicasController')

router.get('/municipios', controller.getMunicipios)
router.get('/unidades-gestoras', controller.getUnidadesGestoras)
router.get('/funcoes', controller.getFuncoes)
router.get('/gestores-unidades-gestoras', controller.getGestoresUnidadesGestoras)
router.get('/unidades-federacao', controller.getUnidadesFederacao)
router.get('/contas-bancarias', controller.getContasBancarias)
router.get('/orgaos', controller.getOrgaos)
router.get('/unidades-orcamentarias', controller.getUnidadesOrcamentarias)
router.get('/tipos-unidades-administrativas', controller.getTiposUnidadesAdministrativas)
router.get('/ordenadores', controller.getOrdenadores)
router.get('/contas-extra-orcamentarias', controller.getContasExtraOrcamentarias)
router.get('/gestores-unidades-orcamentarias-2007', controller.getGestoresUnidadesOrcamentarias2007)
router.get('/situacao-remessa', controller.getSituacaoRemessa)

module.exports = router