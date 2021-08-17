const express = require('express')
const dotenv = require('dotenv')
dotenv.config({ path: './config/config.env' })
const app = express()

const SHA = process.env.GIT_SHA || 'undefined'

app.get('/', (req, res) => {
  res.json({
      msg:"CICD-Service-Learning",
      build_SHA:SHA,
      status:"Active",
      timestamp:Date.now()
  })
})

module.exports = app
