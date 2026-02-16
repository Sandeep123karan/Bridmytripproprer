// const express = require('express');
// const router = express.Router();
// const { 
//   getInsurancePolicies, 
//   calculatePremium, 
//   bookInsurance, 
//   submitClaim 
// } = require('../controllers/insuranceController');

// // Insurance Routes
// router.get('/policies', getInsurancePolicies);
// router.post('/calculate-premium', calculatePremium);
// router.post('/book', bookInsurance);
// router.post('/claim', submitClaim);

// // Get policy by ID
// router.get('/policy/:id', async (req, res) => {
//   try {
//     const InsurancePolicy = require('../models/InsurancePolicy');
//     const policy = await InsurancePolicy.findById(req.params.id);
    
//     if (!policy) {
//       return res.status(404).json({ success: false, message: 'Policy not found' });
//     }
    
//     res.json({ success: true, data: policy });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// // Get all bookings
// router.get('/bookings', async (req, res) => {
//   try {
//     const InsuranceBooking = require('../models/InsuranceBooking');
//     const bookings = await InsuranceBooking.find().populate('policyId').sort({ createdAt: -1 });
//     res.json({ success: true, data: bookings });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// // Get booking by policy number
// router.get('/booking/:policyNumber', async (req, res) => {
//   try {
//     const InsuranceBooking = require('../models/InsuranceBooking');
//     const booking = await InsuranceBooking.findOne({ 
//       policyNumber: req.params.policyNumber 
//     }).populate('policyId');
    
//     if (!booking) {
//       return res.status(404).json({ success: false, message: 'Booking not found' });
//     }
    
//     res.json({ success: true, data: booking });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// // Get all claims
// router.get('/claims', async (req, res) => {
//   try {
//     const InsuranceClaim = require('../models/InsuranceClaim');
//     const claims = await InsuranceClaim.find().sort({ createdAt: -1 });
//     res.json({ success: true, data: claims });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// // Get claim by number
// router.get('/claim/:claimNumber', async (req, res) => {
//   try {
//     const InsuranceClaim = require('../models/InsuranceClaim');
//     const claim = await InsuranceClaim.findOne({ 
//       claimNumber: req.params.claimNumber 
//     });
    
//     if (!claim) {
//       return res.status(404).json({ success: false, message: 'Claim not found' });
//     }
    
//     res.json({ success: true, data: claim });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// // Update claim status
// router.put('/claim/:id/status', async (req, res) => {
//   try {
//     const InsuranceClaim = require('../models/InsuranceClaim');
//     const { status, approvedAmount, rejectionReason } = req.body;
    
//     const updateData = { claimStatus: status };
    
//     if (status === 'APPROVED' || status === 'SETTLED') {
//       updateData.approvedAmount = approvedAmount;
//     }
    
//     if (status === 'REJECTED') {
//       updateData.rejectionReason = rejectionReason;
//     }
    
//     if (status === 'SETTLED') {
//       updateData.settlementDate = new Date();
//     }
    
//     const claim = await InsuranceClaim.findByIdAndUpdate(
//       req.params.id,
//       updateData,
//       { new: true }
//     );
    
//     res.json({ success: true, data: claim });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// module.exports = router;