const express = require('express')
const router = express.Router()

const controller = require('../controllers/pessoalFolhaController')

router.get('/itens-remuneratorios', controller.getItensRemuneratorios)
router.get('/desligamentos', controller.getDesligamentos)
router.get('/agentes-publicos', controller.getAgentesPublicos)

module.exports = router
