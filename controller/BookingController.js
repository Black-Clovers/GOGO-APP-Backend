const booking = require("../model/BookingModel");

const addbooking = (req, res) => {
	const {
	booking_date,
    cus_email,
    cus_phone,
    package_name,

	} = req.body;

	const newtravelbooking = new booking({
	booking_date,
    cus_email,
    cus_phone,
    package_name,
	});

	//create
	newtravelbooking
		.save()
		.then((createbooking) => {
			res.json(createbooking);
		})
		.catch((err) => {
			console.log(err);
		});
};

//getallpackages

const getBooking= async (req, res) => {
	try {
		const cors = await booking.find();
		res.json(cors);
	} catch (error) {
		res.status(400).json(error);
	}
};




//delete
const removeBooking = async (req, res) => {
	const bookingId = req.params.id;

	try {
		const crs = await booking.findById( bookingId);
		if (!crs) {
			return res.status(404).json("There is no Package to remove");
		}

		const removeBooking = await booking.findByIdAndDelete( bookingId);
		res.status(200).json(removeBooking);
	} catch (error) {
		res.status(400).json(error.message);
	}
};


module.exports = {
	addbooking,
    removeBooking,
    getBooking,
};
