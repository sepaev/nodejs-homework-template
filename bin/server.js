const app = require('../app')
require('dotenv').config()
const mongoose = require('mongoose')

const { DB_HOST, PORT = 3000 } = process.env

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log('Database connection successful')

    app.listen(PORT, err => {
      if (err) console.error('Error at server Launch:', err)
      console.log(`Server running. Use our API on port: ${PORT}`)
    })
  })
  .catch(error => {
    console.log(error.message)
    process.exit(1)
  })
