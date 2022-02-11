const asyncHandler = require('express-async-handler')

const Company = require('../models/companyModel')

const getCompanies = asyncHandler(async (req, res) => {

    const companies = await Company.find({ name: req.body.name })

    res.status(200).json(companies)   
})

const setCompanies = asyncHandler(async (req, res) => {
    
    if(!req.body.name) {
        res.status(400).json({ message: 'Please add companies'})
    }

    const company = await Company.create({
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber
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