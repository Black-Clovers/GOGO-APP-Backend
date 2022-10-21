const mongoose = require("mongoose");

const bookingschema = new mongoose.Schema({
	booking_date:String,
    cus_email:String,
    cus_phone:String,
    package_name:String,

});

const BookingModel = mongoose.model("booking", bookingschema);
module.exports = BookingModel;