// import mongoose from "mongoose";

// const insurancePolicySchema = new mongoose.Schema({
//   policyNumber: { type: String, required: true, unique: true },
//   provider: { type: String, required: true },
//   type: { type: String, required: true }, // travel, health, etc.
//   coverageAmount: { type: Number, required: true },
//   premium: { type: Number, required: true },
// }, { timestamps: true });

// export default mongoose.model("InsurancePolicy", insurancePolicySchema);

const mongoose = require("mongoose");

const insurancePolicySchema = new mongoose.Schema({

    name: { type: String, required: true },

    insurer: { type: String, required: true },

    insurerCode: { type: String },

    premium: { type: Number, required: true },

    medical: String,
    passport: String,
    baggage: String,
    tripCancellation: String,
    personalAccident: String,

    features: {
        type: [String],
        default:[]
    },

    badge:String,
    badgeColor:String,

    fullFeatures:{
        type:[String],
        default:[]
    }

},{timestamps:true});

module.exports = mongoose.model("InsurancePolicy", insurancePolicySchema);
