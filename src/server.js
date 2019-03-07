import express from 'express'
import compression from 'compression'
import sirv from 'sirv'
import * as sapper from '@sapper/server'

const { PORT, NODE_ENV } = process.env
const development = NODE_ENV === 'development'

const app = express()
app.use(compression({ threshold: 0 }))
app.use(sirv('static', { development }))
app.use(sapper.middleware())
app.listen(PORT, setTimeout(() => console.log(`Listening on port ${PORT} in ${NODE_ENV} mode`), 100))
