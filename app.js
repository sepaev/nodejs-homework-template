const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const { contactsRouter, usersRouter } = require('./routes/api')
const app = express()
const chalk = require('chalk')

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.use('/api/contacts', contactsRouter)
app.use('/api/users', usersRouter)

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err
  console.log(chalk.red('Catch error'), chalk.yellow(status, message))
  res.status(status).json({ message })
})

module.exports = app
