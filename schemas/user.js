const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = Schema(
  {
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ['starter', 'pro', 'business'],
      default: 'starter',
    },
    token: {
      type: String,
      default: ({ _id }) => {
        return jwt.sign({ id: _id }, process.env.SECRET)
      },
    },
    verificationToken: {
      type: String,
      required: [true, 'Verify token is required'],
    },
    verify: { type: Boolean, default: false },
    avatarUrl: { type: String, required: true },
  },
  { versionKey: false, timestamps: true },
)

userSchema.pre('save', async function () {
  if (this.isNew) {
    const hashPassword = await bcrypt.hash(this.password, 10)
    this.password = hashPassword
  }
})

userSchema.methods.setPassword = function (password) {
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}
const User = model('user', userSchema)

module.exports = User
