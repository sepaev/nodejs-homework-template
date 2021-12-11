/*
1 получает логин как текст
2 получает email как текст
3 получает пароль как текст
4 возвращает

ответ должен иметь статус-код 201
в ответе должен возвращаться токен
в ответе должен возвращаться объект user с 2 полями email и subscription, имеющие тип данных String

*/

// const { signup } = require('../../model/users')
// const { BadRequest } = require('http-errors')
// const { schemaBody } = require('../../middlewares/validation/userValidation')

// async function signupController(req, res) {
//   const body = req.body
//   const { error } = schemaBody.validate(body)
//   if (error) throw new BadRequest(error.message)

//   const data = await signup(body)
//   res.status(201).send(data)
// }
// module.exports = signupController
