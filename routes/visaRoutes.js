// const express = require('express');
// const router = express.Router();
// const { getVisaRequirements, submitVisaApplication } = require('../controllers/visaController');

// // Visa Routes
// router.get('/requirements', getVisaRequirements);
// router.post('/apply', submitVisaApplication);

// // Country-specific visa info
// router.get('/requirements/:country', async (req, res) => {
//   try {
//     const Visa = require('../models/Visa');
//     const visa = await Visa.findOne({ 
//       $or: [
//         { countryCode: req.params.country.toUpperCase() },
//         { countryName: new RegExp(req.params.country, 'i') }
//       ],
//       isActive: true 
//     });
    
//     if (!visa) {
//       return res.status(404).json({ success: false, message: 'Country not found' });
//     }
    
//     res.json({ success: true, data: visa });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// // Get all applications
// router.get('/applications', async (req, res) => {
//   try {
//     const VisaApplication = require('../models/VisaApplication');
//     const applications = await VisaApplication.find().sort({ createdAt: -1 });
//     res.json({ success: true, data: applications });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// // Get application by ID
// router.get('/application/:id', async (req, res) => {
//   try {
//     const VisaApplication = require('../models/VisaApplication');
//     const application = await VisaApplication.findById(req.params.id);
    
//     if (!application) {
//       return res.status(404).json({ success: false, message: 'Application not found' });
//     }
    
//     res.json({ success: true, data: application });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// // Update application status
// router.put('/application/:id/status', async (req, res) => {
//   try {
//     const VisaApplication = require('../models/VisaApplication');
//     const { status } = req.body;
    
//     const application = await VisaApplication.findByIdAndUpdate(
//       req.params.id,
//       { applicationStatus: status },
//       { new: true }
//     );
    
//     res.json({ success: true, data: application });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// module.exports = router;