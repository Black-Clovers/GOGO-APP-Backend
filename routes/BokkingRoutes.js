const express = require("express");
const router = express.Router();
const { addbooking,
    removeBooking,
    getBooking } = require("../controller/BookingController");

//addpackage
router.post("/",addbooking);

//getpackage
router.get("/all",getBooking);

//@route PUT api/course/:id
//@desc Update an course


//@route delete api/course/:id
//@desc Delete an course
router.delete("/:id",removeBooking);




module.exports = router;
