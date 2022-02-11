const mongoose = require('mongoose')

const companySchema = mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, 'Please add a name'],
      },
      email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
      },
      phoneNumber: {
        type: String,
        required: [true, 'Please add a password'],
      },
    },
    {
      timestamps: true,
    }
  )

  
module.exports = mongoose.model('Company', companySchema)