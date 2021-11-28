require('dotenv').config()
const chalk = require('chalk')

const app = require('../app')
const mongoose = require('mongoose')

const { DB_HOST, PORT = 3000 } = process.env
mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log(chalk.keyword('gold')('Database connection successful'))

    app.listen(PORT, err => {
      if (err) {
        console.log(chalk.red('Error at server Launch:'), err)
        return
      }
      console.log(chalk.keyword('gold')(`Server running. Use our API on port: ${PORT}`))
    })
  })
  .catch(error => {
    console.log(chalk.red('Database connection error'), error.message)
    process.exit(1)
  })
