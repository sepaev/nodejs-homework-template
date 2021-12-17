const { signupController } = require('../../controller/users')
const dbMongoMemory = require('../../bin/dbMongoMemory')

beforeAll(async () => await dbMongoMemory.connect())
// afterEach(async () => await dbMongoMemory.clearDatabase())
afterAll(async () => await dbMongoMemory.closeDatabase())

const signup = async (email, password, token) => {
  const authorization = token ? 'Bearer ' + token : ''
  const req = {
    body: { email, password },
    headers: { authorization },
    testmode: true,
  }
  const res = {}

  try {
    const result = await signupController(req, res)
    return result
  } catch (error) {
    throw Error(error.message)
  }
}

module.exports = signup
