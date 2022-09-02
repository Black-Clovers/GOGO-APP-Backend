const express = require("express");
const router = express.Router();
const { 
    addPackage,

 } = require("../controller/TravelPController");

 //addpackage
 
 router.post("/",addPackage);

 module.exports = router;