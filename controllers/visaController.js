// const Visa = require('../models/Visa');
// const VisaApplication = require('../models/VisaApplication');

// // Get visa requirements for countries
// const getVisaRequirements = async (req, res) => {
//   try {
//     // Using VisaList API or similar service
//     const visas = await Visa.find({ isActive: true });
    
//     res.json({
//       success: true,
//       data: visas
//     });
//   } catch (error) {
//     console.error('Visa requirements error:', error);
//     res.status(500).json({ success: false, message: 'Failed to fetch visa requirements' });
//   }
// };

// // Submit visa application
// const submitVisaApplication = async (req, res) => {
//   try {
//     const applicationData = req.body;
    
//     const applicationId = 'VISA' + Math.random().toString(36).substr(2, 10).toUpperCase();
    
//     const application = new VisaApplication({
//       ...applicationData,
//       applicationId
//     });
    
//     await application.save();
    
//     res.json({
//       success: true,
//       data: application,
//       message: 'Visa application submitted successfully'
//     });
//   } catch (error) {
//     console.error('Visa application error:', error);
//     res.status(500).json({ success: false, message: 'Failed to submit visa application' });
//   }
// };