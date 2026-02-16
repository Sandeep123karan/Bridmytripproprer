// const AddHotel = require('../models/addHotelModel');

// // Create hotel
// exports.createHotel = async (req, res) => {
//   try {
//     const hotel = new AddHotel(req.body);
//     await hotel.save();
//     res.status(201).json(hotel);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Get all hotels
// exports.getHotels = async (req, res) => {
//   try {
//     const hotels = await AddHotel.find().sort({ createdAt: -1 });
//     res.status(200).json(hotels);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Get single hotel
// exports.getHotelById = async (req, res) => {
//   try {
//     const hotel = await AddHotel.findById(req.params.id);
//     res.status(200).json(hotel);
//   } catch (err) {
//     res.status(404).json({ error: 'Hotel not found' });
//   }
// };

// // Update hotel
// exports.updateHotel = async (req, res) => {
//   try {
//     const hotel = await AddHotel.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.status(200).json(hotel);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Delete hotel
// exports.deleteHotel = async (req, res) => {
//   try {
//     await AddHotel.findByIdAndDelete(req.params.id);
//     res.status(200).json({ message: 'Hotel deleted' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

const AddHotel = require('../models/addHotelModel');

// CREATE HOTEL
exports.createHotel = async (req, res) => {
  try {
    let body = req.body;

    const amenities = body.amenities ? body.amenities.split(',').map(a => a.trim()) : [];

    let coordinates = { lat: null, lng: null };
    if (body.coordinates) {
      const [lat, lng] = body.coordinates.split(',').map(Number);
      coordinates = { lat, lng };
    }

    const hotel = new AddHotel({
      ...body,
      amenities,
      coordinates
    });

    await hotel.save();

    res.status(201).json({ message: "Hotel created", hotel });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ALL HOTELS
exports.getHotels = async (req, res) => {
  try {
    const hotels = await AddHotel.find().sort({ createdAt: -1 });
    res.json(hotels);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ONE HOTEL
exports.getHotelById = async (req, res) => {
  try {
    const hotel = await AddHotel.findById(req.params.id);
    res.json(hotel);
  } catch (err) {
    res.status(404).json({ error: "Hotel not found" });
  }
};

// UPDATE
exports.updateHotel = async (req, res) => {
  try {
    let body = req.body;

    const amenities = body.amenities ? body.amenities.split(',').map(a => a.trim()) : [];

    let coordinates = { lat: null, lng: null };
    if (body.coordinates) {
      const [lat, lng] = body.coordinates.split(',').map(Number);
      coordinates = { lat, lng };
    }

    const hotel = await AddHotel.findByIdAndUpdate(
      req.params.id,
      { ...body, amenities, coordinates },
      { new: true }
    );

    res.json(hotel);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
exports.deleteHotel = async (req, res) => {
  try {
    await AddHotel.findByIdAndDelete(req.params.id);
    res.json({ message: "Hotel deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
