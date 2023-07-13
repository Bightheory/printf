var express = require("express");
var { hashPassword, sendWelcomeEmail,resendWelcomeEmail } = require("../../utils");
const UsersDatabase = require("../../models/User");
var router = express.Router();
const { v4: uuidv4 } = require("uuid");

router.post("/register", async (req, res) => {
  const {etd, eta,
    totalFreight,
    destination,
    serviceType,
    paymentMode,
    receiverName,
    receiverEmail,
    receiverAddress,
    deliveryDay,
    senderName,
    senderEmail,
    senderAddress,
    itemType,
    weight,
   mot,
   consignmentDetails,
   location,
     } = req.body;

  //   check if any user has that username
  // const user = await UsersDatabase.findOne({ receiverEmail });

  // // if user exists
  // if (user) {
  //   res.status(400).json({
  //     success: false,
  //     message: "email address is already taken",
  //   });
  //   return;
  // }

  await UsersDatabase.create({
    
   etd,
    eta,
    senderAddress,
    totalFreight,
    serviceType,
    destination,
    paymentMode,
    receiverName,
    receiverEmail,
    receiverAddress,
    deliveryDay,
    senderName,
    senderEmail,
    
    itemType,
    weight,
   mot,
   consignmentDetails,
   history:[],
   location,
  })
    .then((data) => {
      return res.json({ code: "Ok", data: user });
    })
    .then(() => {
      var token = uuidv4();
      
    })
    .catch((error) => {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    });
});




module.exports = router;
