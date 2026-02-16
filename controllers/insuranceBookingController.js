const InsuranceBooking = require("../models/InsuranceBooking");


// ✅ CREATE BOOKING
exports.createBooking = async(req,res)=>{
try{

const {
fullName,
email,
phoneNumber,
plan
} = req.body;


// ⭐ Strong validation
if(!fullName?.trim() || !email?.trim() || !phoneNumber || !plan){

return res.status(400).json({
message:"Required fields missing 🔥"
});
}


const booking = await InsuranceBooking.create(req.body);

res.status(201).json({
success:true,
booking
});

}catch(err){

console.log("BOOKING ERROR:",err);
res.status(500).json(err.message);
}
};



// ✅ GET ALL BOOKINGS (ADMIN)
exports.getBookings = async(req,res)=>{
try{

const bookings = await InsuranceBooking
.find()
.sort({createdAt:-1});

res.json(bookings);

}catch(err){
res.status(500).json(err.message);
}
};



// ✅ GET SINGLE
exports.getBooking = async(req,res)=>{
try{

const booking = await InsuranceBooking.findById(req.params.id);

res.json(booking);

}catch(err){
res.status(500).json(err.message);
}
};



// ✅ UPDATE PAYMENT
exports.updatePayment = async(req,res)=>{
try{

const updated = await InsuranceBooking.findByIdAndUpdate(
req.params.id,
{
paymentStatus:"Paid",
paymentId:req.body.paymentId,
status:"Confirmed"
},
{new:true}
);

res.json(updated);

}catch(err){
res.status(500).json(err.message);
}
};



// ✅ DELETE
exports.deleteBooking = async(req,res)=>{
try{

await InsuranceBooking.findByIdAndDelete(req.params.id);

res.json({
message:"Booking Deleted"
});

}catch(err){
res.status(500).json(err.message);
}
};
