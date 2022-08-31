const travelpackage =require("../model/TravelPackageModel");

const addPackage =(req, res)=>{

    const {package_id,package_name,vehicle_type,package_overview,package_include,contacts,image_url,add_info,price} = req.body;
    
  
    const newtravelPackage = new travelpackage({
    package_id,
    package_name,
    vehicle_type,
    package_overview,
    package_include,
    contacts,
    image_url,
    add_info,
    price,
    });

  //create
  newtravelPackage.save().then((createPackage)=>{
        res.json(createPackage);
    }).catch((err)=>{
        console.log(error);
    });
  };
 

  
  module.exports = {
    addPackage,
    
  }