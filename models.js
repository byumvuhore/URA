//For modelsconst mongoose = require('mongoose');

// Taxpayer model schema
const taxpayerSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    dateOfBirth: Date,
    occupation: String,
    gender: {
      type: String,
      enum: ['Male', 'Female'],
    },
    phoneNumber: String,
    emailAddress: String,
    expectedAnnualIncome: Number,
    tin: {
      type: String,
      unique: true,
      required: true,
    },
  });
  
  const Taxpayer = mongoose.model('Taxpayer', taxpayerSchema);
  
  // Asset model schema
  const assetSchema = new mongoose.Schema({
    assetName: {
      type: String,
      required: true,
    },
    estimatedCost: Number,
    ownerTIN: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ['Fixed', 'Movable'],
    },
    assetNumber: {
      type: String,
      unique: true,
      required: true,
    },
  });
  
  const Asset = mongoose.model('Asset', assetSchema);
  
  // IncomeTaxPayment model schema
  const incomeTaxPaymentSchema = new mongoose.Schema({
    payerTIN: {
      type: String,
      required: true,
    },
    profits: {
      type: Number,
      required: true,
    },
    amountPaid: {
      type: Number,
      required: true,
    },
    paymentDate: {
      type: Date,
      default: Date.now,
    },
  });
  
  const IncomeTaxPayment = mongoose.model('IncomeTaxPayment', incomeTaxPaymentSchema);
  
  module.exports = {
    Taxpayer,
    Asset,
    IncomeTaxPayment,
  };
  