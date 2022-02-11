const asyncHandler = require('express-async-handler')

const Company = require('../models/companyModel')

const getCompanies = asyncHandler(async (req, res) => {

    const companies = await Company.find()

    res.status(200).json(companies)   
})

const setCompanies = asyncHandler(async (req, res) => {

    const { name, email, phoneNumber } = req.body
    
    if(!name || !email || !phoneNumber) {
        res.status(400).json({ message: 'Please add details correctly'})
    }

    const company = await Company.create({
        name, email, phoneNumber
    })



    res.status(200).json(company)   
})

const updateCompanies = asyncHandler(async (req, res) => {
    
    res.status(200).json({ message: 'Get goals'})   
})

const deleteCompanies = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})  
})

module.exports = {
    getCompanies,
    setCompanies,
    updateCompanies,
    deleteCompanies
}