// const InsurancePolicy = require('../models/InsurancePolicy');
// const InsuranceBooking = require('../models/InsuranceBooking');
// const InsuranceClaim = require('../models/InsuranceClaim');

// // Get insurance policies
// const getInsurancePolicies = async (req, res) => {
//   try {
//     const policies = await InsurancePolicy.find({ isActive: true });
    
//     res.json({
//       success: true,
//       data: policies
//     });
//   } catch (error) {
//     console.error('Insurance policies error:', error);
//     res.status(500).json({ success: false, message: 'Failed to fetch insurance policies' });
//   }
// };

// // Calculate insurance premium
// const calculatePremium = async (req, res) => {
//   try {
//     const { policyId, age, tripDuration, destination } = req.body;
    
//     const policy = await InsurancePolicy.findById(policyId);
    
//     if (!policy) {
//       return res.status(404).json({ success: false, message: 'Policy not found' });
//     }
    
//     // Find appropriate rate based on age
//     const ageGroup = policy.premiumRates.find(rate => {
//       const [min, max] = rate.ageGroup.split('-').map(Number);
//       return age >= min && age <= max;
//     });
    
//     const premium = Math.max(
//       ageGroup.ratePerDay * tripDuration,
//       ageGroup.minimumPremium
//     );
    
//     res.json({
//       success: true,
//       data: {
//         premium,
//         coverage: policy.coverage,
//         policyName: policy.policyName
//       }
//     });
//   } catch (error) {
//     console.error('Premium calculation error:', error);
//     res.status(500).json({ success: false, message: 'Failed to calculate premium' });
//   }
// };

// // Book insurance
// const bookInsurance = async (req, res) => {
//   try {
//     const bookingData = req.body;
    
//     const policyNumber = 'POL' + Math.random().toString(36).substr(2, 10).toUpperCase();
    
//     const booking = new InsuranceBooking({
//       ...bookingData,
//       policyNumber
//     });
    
//     await booking.save();
    
//     res.json({
//       success: true,
//       data: booking,
//       message: 'Insurance booked successfully'
//     });
//   } catch (error) {
//     console.error('Insurance booking error:', error);
//     res.status(500).json({ success: false, message: 'Failed to book insurance' });
//   }
// };

// // Submit insurance claim
// const submitClaim = async (req, res) => {
//   try {
//     const claimData = req.body;
    
//     const claimNumber = 'CLM' + Math.random().toString(36).substr(2, 10).toUpperCase();
    
//     const claim = new InsuranceClaim({
//       ...claimData,
//       claimNumber
//     });
    
//     await claim.save();
    
//     res.json({
//       success: true,
//       data: claim,
//       message: 'Insurance claim submitted successfully'
//     });
//   } catch (error) {
//     console.error('Insurance claim error:', error);
//     res.status(500).json({ success: false, message: 'Failed to submit claim' });
//   }
// };

// module.exports = {
//   // Train exports
//   getTrainRoutes,
//   searchTrains,
//   getPNRStatus,
//   bookTrain,
  
//   // Bus exports
//   getBusRoutes,
//   bookBus,
  
//   // Currency exports
//   getExchangeRates,
//   convertCurrency,
  
//   // Visa exports
//   getVisaRequirements,
//   submitVisaApplication,
  
//   // Insurance exports
//   getInsurancePolicies,
//   calculatePremium,
//   bookInsurance,
//   submitClaim
// };