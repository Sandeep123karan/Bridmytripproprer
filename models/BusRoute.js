// const mongoose = require("mongoose");

// const busRouteSchema = new mongoose.Schema({
//   fromCity: { type: String, required: true },
//   toCity: { type: String, required: true },
//   distance: { type: Number }, 
//   duration: { type: String },
//   status: { type: Boolean, default: true },
// }, { timestamps: true });

// module.exports = mongoose.model("BusRoute", busRouteSchema);
const mongoose = require("mongoose");

const busRouteSchema = new mongoose.Schema(
  {
    fromCity: { type: String, required: true },
    toCity: { type: String, required: true },
    distance: { type: Number, default: 0 },
    duration: { type: String, default: "" },
    status: { type: Boolean, default: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("BusRoute", busRouteSchema);
