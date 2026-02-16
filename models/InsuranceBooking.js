// import mongoose from "mongoose";

// const insuranceBookingSchema = new mongoose.Schema({
//   policyNumber: { type: String, required: true, unique: true },
//   policyId: { type: mongoose.Schema.Types.ObjectId, ref: "InsurancePolicy", required: true },
//   insuredDetails: {
//     name: String,
//     dateOfBirth: Date,
//     age: Number,
//     email: String,
//     mobile: String,
//     address: String,
//     passportNumber: String,
//   },
//   travelDetails: {
//     destination: String,
//     departureDate: Date,
//     returnDate: Date,
//     tripDuration: Number,
//     purposeOfTravel: String,
//   },
//   coverage: {
//     medicalExpenses: Number,
//     accidentalDeath: Number,
//     baggage: Number,
//     flightDelay: Number,
//     tripCancellation: Number,
//   },
//   premiumAmount: { type: Number, required: true },
//   policyStatus: {
//     type: String,
//     enum: ["ACTIVE", "EXPIRED", "CANCELLED"],
//     default: "ACTIVE",
//   },
//   paymentStatus: {
//     type: String,
//     enum: ["PAID", "PENDING"],
//     default: "PENDING",
//   },
//   issueDate: { type: Date, default: Date.now },
//   expiryDate: { type: Date, required: true },
// }, { timestamps: true });

// export default mongoose.model("InsuranceBooking", insuranceBookingSchema);




const mongoose = require("mongoose");

const insuranceBookingSchema = new mongoose.Schema({

plan:{
    type:Object,
    required:true
},

// PERSONAL
fullName:{
    type:String,
    required:true,
    trim:true
},

dob:String,
nationality:String,
visaType:String,
passportNumber:String,
passportExpiry:String,
panNumber:String,
noPan:Boolean,

email:{
    type:String,
    required:true,
    trim:true
},

phoneNumber:{
    type:String,
    required:true
},

alternatePhone:String,
address:String,
city:String,
pincode:String,

// NOMINEE
nomineeName:String,
nomineeRelation:String,
nomineeDob:String,

// MEDICAL
hasMedicalConditions:Boolean,
medicalConditions:String,
isPregnant:Boolean,
pregnancyWeeks:String,

// PAYMENT
paymentStatus:{
    type:String,
    default:"Pending"
},

paymentId:String,

// BOOKING STATUS
status:{
    type:String,
    default:"Booked"
}

},{timestamps:true});

module.exports = mongoose.model("InsuranceBooking", insuranceBookingSchema);
