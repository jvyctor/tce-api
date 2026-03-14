const express = require('express')
const cors = require('cors')

const informacoesBasicasRoutes = require('./routes/informacoesBasicasRoutes')
const aquisicoesContratosRoutes = require('./routes/aquisicoesContratosRoutes')
const pessoalFolhaRoutes = require('./routes/pessoalFolhaRoutes')
const patrimonioMunicipalRoutes = require('./routes/patrimonioMunicipalRoutes')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/tce/informacoes-basicas', informacoesBasicasRoutes)
app.use('/api/tce/aquisicoes-contratos', aquisicoesContratosRoutes)
app.use('/api/tce/pessoal-folha', pessoalFolhaRoutes)
app.use('/api/tce/patrimonio-municipal', patrimonioMunicipalRoutes)

module.exports = app