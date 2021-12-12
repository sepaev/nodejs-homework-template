const signup = require('../middlewares/test/signup')

function checkSuccess(data, status, inputMAil) {
  expect(data.token).not.toBeNull()
  expect(data.user).toStrictEqual({ email: inputMAil, subscription: 'starter' })
  expect(status).toBe(201)
}

describe('Test signup controller function', () => {
  test('email - empty', async () => {
    expect(() => signup('', '123456', '')).rejects.toThrow('"email" is not allowed to be empty')
  })
  test('email - short', async () => {
    expect(() => signup('as', '123456', '')).rejects.toThrow('"email" must be a valid email')
  })
  test('email - long', async () => {
    expect(() =>
      signup(
        'thisIsVerylong@email.inOurSoStressAndHopeless.World123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890',
        '123456',
        '',
      ),
    ).rejects.toThrow('"email" must be a valid email')
  })
  test('email - without "@"', async () => {
    expect(() => signup('invalid.email.test', '123456', '')).rejects.toThrow('"email" must be a valid email')
  })
  test('email - with 1 segment', async () => {
    expect(() => signup('invalid@email', '123456', '')).rejects.toThrow('"email" must be a valid email')
  })
  test('email - with 0 segment', async () => {
    expect(() => signup('invalid@', '123456', '')).rejects.toThrow('"email" must be a valid email')
  })
  test('email - with space', async () => {
    expect(() => signup('invalid@e mail.test', '123456', '')).rejects.toThrow('"email" must be a valid email')
  })
  test('password - empty', async () => {
    expect(() => signup('valid@email.test', '', '')).rejects.toThrow('"password" is not allowed to be empty')
  })
  test('password - short(<5)', async () => {
    expect(() => signup('valid@email.test', '123', '')).rejects.toThrow(
      '"password" length must be at least 5 characters long',
    )
  })
  test('password - length 5', async () => {
    const inputMAil = 'valid5@email.test'
    const { data, status } = await signup(inputMAil, '12345', '')
    checkSuccess(data, status, inputMAil)
  })
  test('password - length 8', async () => {
    const inputMAil = 'valid8@email.test'
    const { data, status } = await signup(inputMAil, '12345678', '')
    checkSuccess(data, status, inputMAil)
  })
  test('password - long(>8)', async () => {
    expect(() => signup('valid@email.test', '12345678910', '')).rejects.toThrow(
      '"password" length must be less than or equal to 8 characters long',
    )
  })
  test('signup - with token', async () => {
    expect(() => signup('valid@email.test', '123456', 'someValueOrValidToken')).rejects.toThrow('Please logout')
  })
  test('signup - email exists', async () => {
    expect(() => signup('valid8@email.test', '123456', '')).rejects.toThrow('Email in use')
  })
  test('signup - correct', async () => {
    const inputMAil = 'valid@email.test'
    const { data, status } = await signup(inputMAil, '123456', '')
    checkSuccess(data, status, inputMAil)
  })
})
