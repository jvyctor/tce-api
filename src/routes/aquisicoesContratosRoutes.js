const express = require('express')
const router = express.Router()

const controller = require('../controllers/aquisicoesContratosController')

router.get('/publicacoes-editais-licitacoes', controller.getPublicacoesEditaisLicitacoes)
router.get('/contratados', controller.getContratados)
router.get('/itens-licitacoes', controller.getItensLicitacoes)
router.get('/licitacoes', controller.getLicitacoes)
router.get('/licitantes', controller.getLicitantes)
router.get('/comissoes-licitacoes', controller.getComissoesLicitacoes)
router.get('/dotacoes-licitacoes', controller.getDotacoesLicitacoes)
router.get('/contrato', controller.getContrato)

module.exports = router
